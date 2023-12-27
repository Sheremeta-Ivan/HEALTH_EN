import React from "react";
import { useData } from "hooks/useUserData";
import { nanoid } from "nanoid";
import { AddButton, EditButton, ListWrapper } from "./Dishes.styled";
import { ReactComponent as EditIcon } from "../../../images/icons-linear/edit.svg";
import { ReactComponent as AddIcon } from "../../../images/icons-linear/add.svg";
import { useDispatch } from "react-redux";
import {
  openModalRecord,
  openUpdateRecord,
  showMealType,
} from "../../../redux/Modal/modal-slice";


export const DinnerDishes = () => {
  const dispatch = useDispatch();
  const { dinnerMeals } = useData();


  const generateListItems = () => {
    const listItems = [];
    const totalItems = dinnerMeals.length > 4 ? dinnerMeals.length + 1 : 4;

    for (let i = 1; i <= totalItems; i++) {
      listItems.push(<li key={nanoid()}>{i}</li>);
    }

    return listItems;
  };


  const handleOpenUpdateRecord = (id) => {
    dispatch(openUpdateRecord());
    dispatch(showMealType(id));
  };


  const handleOpenModalRecord = (id) => {
    dispatch(openModalRecord());
    dispatch(showMealType(id));
  };


  return (
    <ListWrapper>
      <ul className="number-list">{generateListItems()}</ul>
      <ul className="dish">
        {dinnerMeals.map((item) => (
          <li className="list-item" key={item.mealId}>
            <div className="wrapper">
              <p className="dish-title">{item.name}</p>

              <div className="nutrients-wrapper">
                <p className="value">
                  <span>Carb.</span>
                  {item.carbohydrates}
                </p>
                <span>Prot.</span>
                <p className="value">{item.protein}</p>
                <span>Fat.</span>
                <p className="value">{item.fat}</p>
              </div>
            </div>
            <EditButton
              className="edit-button"
              onClick={() =>
                handleOpenUpdateRecord({
                  mealType: "dinner",
                  mealId: item.mealId,
                })
              }
            >
              <EditIcon />
              Edit
            </EditButton>
          </li>
        ))}
        <AddButton
          alt="Add icon"
          id="dinner"
          onClick={() => handleOpenModalRecord("dinner")}
        >
          <AddIcon alt="Add icon" />
          Record your meal
        </AddButton>
      </ul>
    </ListWrapper>
  );
};