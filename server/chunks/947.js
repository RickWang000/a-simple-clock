exports.id = 947;
exports.ids = [947];
exports.modules = {

/***/ 990:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   G$: () => (/* binding */ CurrentStyleContext),
/* harmony export */   Xe: () => (/* binding */ CurrentStateContext),
/* harmony export */   _r: () => (/* binding */ AlarmTimeContext),
/* harmony export */   c7: () => (/* binding */ CurrentTimeContext)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

/* current time mock data */ const CurrentTimeContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)({
    currentTime: {
        hour: 0,
        minute: 0,
        second: 0
    },
    setCurrentTime: ()=>{}
});
/* current functioning state: NORMAL, STOPWATCH, TIMER */ const CurrentStateContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)("NORMAL");
/* current clock style: BASIC, ROMAN, PLATE */ const CurrentStyleContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)("BASIC");
/* alarm time controller, use for setting alarm. { time, setTime,  } */ const AlarmTimeContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)({
    alarmTime: {
        hour: 0,
        minute: 0,
        second: 0
    },
    setAlarmTime: ()=>{},
    alarmTitle: "",
    setAlarmTitle: ()=>{}
});


/***/ }),

/***/ 4:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ App)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(893);
/* harmony import */ var _contexts_GlobalContext__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(990);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _styles_global_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(605);
/* harmony import */ var _styles_global_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_global_css__WEBPACK_IMPORTED_MODULE_3__);




function App({ Component, pageProps }) {
    const [currentState, setCurrentState] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)("NORMAL");
    const [currentStyle, setCurrentStyle] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)("BASIC");
    /* something goes wrong with Date */ let d = new Date();
    let initTime = {
        hour: d.getHours(),
        minute: d.getMinutes(),
        second: d.getSeconds()
    };
    const [currentTime, setCurrentTime] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(initTime);
    const [alarmTime, setAlarmTime] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(initTime);
    const [alarmTitle, setAlarmTitle] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)("");
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_contexts_GlobalContext__WEBPACK_IMPORTED_MODULE_1__/* .CurrentTimeContext */ .c7.Provider, {
            value: {
                currentTime,
                setCurrentTime
            },
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_contexts_GlobalContext__WEBPACK_IMPORTED_MODULE_1__/* .CurrentStyleContext */ .G$.Provider, {
                value: {
                    currentStyle,
                    setCurrentStyle
                },
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_contexts_GlobalContext__WEBPACK_IMPORTED_MODULE_1__/* .CurrentStateContext */ .Xe.Provider, {
                    value: {
                        currentState,
                        setCurrentState
                    },
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_contexts_GlobalContext__WEBPACK_IMPORTED_MODULE_1__/* .AlarmTimeContext */ ._r.Provider, {
                        value: {
                            alarmTime,
                            setAlarmTime,
                            alarmTitle,
                            setAlarmTitle
                        },
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Component, {
                            ...pageProps
                        })
                    })
                })
            })
        })
    });
}


/***/ }),

/***/ 88:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Document)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(893);
/* harmony import */ var next_document__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(859);
/* harmony import */ var next_document__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_document__WEBPACK_IMPORTED_MODULE_1__);
/* import third-party css and js here */ 

function Document() {
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(next_document__WEBPACK_IMPORTED_MODULE_1__.Html, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_document__WEBPACK_IMPORTED_MODULE_1__.Head, {}),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("body", {
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_document__WEBPACK_IMPORTED_MODULE_1__.Main, {}),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_document__WEBPACK_IMPORTED_MODULE_1__.NextScript, {})
                ]
            })
        ]
    });
}


/***/ }),

/***/ 605:
/***/ (() => {



/***/ })

};
;