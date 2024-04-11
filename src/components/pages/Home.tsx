import React, { useState, useEffect, useRef, useMemo } from "react";
import Categories from "../Categories.tsx";
import PizzaBlock from "../PizzaBlock/index.tsx";
import Sort from "../Sort.tsx";
import qs from "qs";
import { filters } from "../Sort.tsx";
import { useNavigate, Link } from "react-router-dom";
import PizzaSceleton from "../PizzaSceleton.jsx";
import Pagination from "../Pagination/Pagination.tsx";
import { useSelector } from "react-redux";
import { useAppDispatch } from "../../redux/store.ts";
import { useDispatch } from "react-redux";
import { selectFilter } from "../../redux/features/Category/selectors.ts";
import {
  setCategory,
  setCurrentPage,
  setFilters,
} from "../../redux/features/Category/slice.ts";
import { selectPizzaData } from "../../redux/features/pizza/selectors.ts";
import { fetchPizzas } from "../../redux/features/pizza/slice.ts";
export default function Home() {
  const isSearch = useRef(false);
  const isMonted = useRef(false);
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { category, sort, currentPage, searchValue } =
    useSelector(selectFilter);
  const { items, status } = useSelector(selectPizzaData);
  const sortType = sort.sortProperty;

  const onChangeCategory = React.useCallback((id: number) => {
    dispatch(setCategory(id));
  }, []);

  const onChangeCurrentPage = (page: number) => {
    dispatch(setCurrentPage(page));
  };

  useEffect(() => {
    if (window.location.search) {
      const params = qs.parse(window.location.search.substring(1));
      const sort = filters.find(
        (obj) => obj.sortProperty === params.sortProperty
      );
      if (sort !== undefined) {
        dispatch(
          setFilters({
            ...params,
            sort,
            searchValue: "",
            category: 0,
            currentPage: 1,
          })
        );
      }
    } else {
      isSearch.current = false;
    }
  }, []);
  const getPizzas = async () => {
    const order = sortType.includes("-") ? "asc" : "desc";
    const sortBy = sortType.replace("-", "");
    const byCategory = category > 0 ? `category=${category}` : "";
    const search = searchValue ? `&search=${searchValue}` : "";
    dispatch(
      fetchPizzas({
        order,
        sortBy,
        byCategory,
        search,
        currentPage,
      })
    );
  };
  useEffect(() => {
    window.scrollTo(0, 0);

    if (!isSearch.current) {
      getPizzas();
    }
    isSearch.current = false;
  }, [category, sortType, searchValue, currentPage]);

  useEffect(() => {
    if (isMonted.current) {
      const queryString = qs.stringify({
        sortProperty: sortType,
        category,
        currentPage,
      });
      navigate(`?${queryString}`);
    }
    isMonted.current = true;
  }, [category, sortType]);

  const pizzasMap = items.map((pizza: any) => (
    <PizzaBlock key={pizza.title} {...pizza} />
  ));
  const sceleton = [...new Array(6)].map((_, index) => (
    <PizzaSceleton key={index} index={index} />
  ));

  return (
    <>
      <div className="content__top">
        <Categories category={category} onChangeCategory={onChangeCategory} />
        <Sort value={sort} />
      </div>
      <h2 className="content__title">Все пиццы</h2>
      {status === "error" ? (
        <div className="content__error-info">
          <h2>404 😕</h2>
          <p>Не удалось получить пиццы...</p>
        </div>
      ) : (
        <div className="content__items">
          {status === "loading" ? sceleton : pizzasMap}
        </div>
      )}

      <Pagination
        currentPage={currentPage}
        onChangePage={onChangeCurrentPage}
      />
    </>
  );
}
