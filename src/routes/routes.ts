
import { lazy, LazyExoticComponent } from "react";
import { LazyPage1, LazyPage2, LazyPage3 } from "../01-lazyload/pages";
import React from 'react';

type JSXComponent = () => JSX.Element;

interface Route {
    to: string;
    path: string;
    name: string;
    component: LazyExoticComponent<JSXComponent> | JSXComponent;    
}

const Lazy1 = lazy(() => import(/*webpackChunkName: "LazyPage1"*/'../01-lazyload/pages/LazyPage1'));
const Lazy2 = lazy(() => import(/*webpackChunkName: "LazyPage2"*/'../01-lazyload/pages/LazyPage2'));
const Lazy3 = lazy(() => import(/*webpackChunkName: "LazyPage3"*/'../01-lazyload/pages/LazyPage3'));


export const routes: Route[] = [
    {
        to: '/lazy1',
        path: 'lazy1',
        component: Lazy1,
        name: 'Lazy-1'
    },
    {
        to: '/lazy2',
        path: 'lazy2',
        component: Lazy2,
        name: 'lazy-2'
    },
    {
        to: '/lazy3',
        path: 'lazy3',
        component: Lazy3,
        name: 'lazy-3'
    }
]