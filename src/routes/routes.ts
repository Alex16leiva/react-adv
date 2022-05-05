
import { lazy, LazyExoticComponent } from "react";
import { LazyPage1, LazyPage2, LazyPage3 } from "../01-lazyload/pages";
import React from 'react';
import { NoLazy } from "../01-lazyload/pages/NoLazy";

type JSXComponent = () => JSX.Element;

interface Route {
    to: string;
    path: string;
    name: string;
    component: LazyExoticComponent<JSXComponent> | JSXComponent;    
}

const LazyLayout = lazy(() => import(/*webpackChunkName: "LazyLayout"*/'../01-lazyload/layout/LazyLayout'));
// const Lazy2 = lazy(() => import(/*webpackChunkName: "LazyPage2"*/'../01-lazyload/pages/LazyPage2'));
// const Lazy3 = lazy(() => import(/*webpackChunkName: "LazyPage3"*/'../01-lazyload/pages/LazyPage3'));


export const routes: Route[] = [
    {
        path: '/lazyload/*',
        to: '/lazyload',
        component: LazyLayout,
        name: 'LazyLayout - Dash'
    },
    {
        to: '/no-lazy',
        path: 'no-lazy',
        component: NoLazy,
        name: 'No Lazy'
    },
    
]