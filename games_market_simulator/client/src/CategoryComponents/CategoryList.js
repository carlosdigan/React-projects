import React from "react";
import Category from "./Category.js"
import {v4} from 'uuid'
export default function CategoryList({categories}) {
    return categories.map(category => <Category key={v4()} {...category}/>);
}