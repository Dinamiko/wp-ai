/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/@wordpress/interface/build-module/components/action-item/index.js"
/*!****************************************************************************************!*\
  !*** ./node_modules/@wordpress/interface/build-module/components/action-item/index.js ***!
  \****************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__);
/**
 * WordPress dependencies
 */



const noop = () => {};
function ActionItemSlot({
  name,
  as: Component = _wordpress_components__WEBPACK_IMPORTED_MODULE_0__.MenuGroup,
  fillProps = {},
  bubblesVirtually,
  ...props
}) {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.Slot, {
    name: name,
    bubblesVirtually: bubblesVirtually,
    fillProps: fillProps,
    children: fills => {
      if (!_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.Children.toArray(fills).length) {
        return null;
      }

      // Special handling exists for backward compatibility.
      // It ensures that menu items created by plugin authors aren't
      // duplicated with automatically injected menu items coming
      // from pinnable plugin sidebars.
      // @see https://github.com/WordPress/gutenberg/issues/14457
      const initializedByPlugins = [];
      _wordpress_element__WEBPACK_IMPORTED_MODULE_1__.Children.forEach(fills, ({
        props: {
          __unstableExplicitMenuItem,
          __unstableTarget
        }
      }) => {
        if (__unstableTarget && __unstableExplicitMenuItem) {
          initializedByPlugins.push(__unstableTarget);
        }
      });
      const children = _wordpress_element__WEBPACK_IMPORTED_MODULE_1__.Children.map(fills, child => {
        if (!child.props.__unstableExplicitMenuItem && initializedByPlugins.includes(child.props.__unstableTarget)) {
          return null;
        }
        return child;
      });
      return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(Component, {
        ...props,
        children: children
      });
    }
  });
}
function ActionItem({
  name,
  as: Component = _wordpress_components__WEBPACK_IMPORTED_MODULE_0__.Button,
  onClick,
  ...props
}) {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.Fill, {
    name: name,
    children: ({
      onClick: fpOnClick
    }) => {
      return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(Component, {
        onClick: onClick || fpOnClick ? (...args) => {
          (onClick || noop)(...args);
          (fpOnClick || noop)(...args);
        } : undefined,
        ...props
      });
    }
  });
}
ActionItem.Slot = ActionItemSlot;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ActionItem);
//# sourceMappingURL=index.js.map

/***/ },

/***/ "./node_modules/@wordpress/interface/build-module/components/complementary-area-header/index.js"
/*!******************************************************************************************************!*\
  !*** ./node_modules/@wordpress/interface/build-module/components/complementary-area-header/index.js ***!
  \******************************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! clsx */ "./node_modules/clsx/dist/clsx.mjs");
/* harmony import */ var _wordpress_icons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/icons */ "./node_modules/@wordpress/interface/node_modules/@wordpress/icons/build-module/library/close-small.js");
/* harmony import */ var _complementary_area_toggle__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../complementary-area-toggle */ "./node_modules/@wordpress/interface/build-module/components/complementary-area-toggle/index.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__);
/**
 * External dependencies
 */


/**
 * WordPress dependencies
 */


/**
 * Internal dependencies
 */


const ComplementaryAreaHeader = ({
  children,
  className,
  toggleButtonProps
}) => {
  const toggleButton = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_complementary_area_toggle__WEBPACK_IMPORTED_MODULE_2__["default"], {
    icon: _wordpress_icons__WEBPACK_IMPORTED_MODULE_1__["default"],
    ...toggleButtonProps
  });
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
    className: (0,clsx__WEBPACK_IMPORTED_MODULE_0__["default"])('components-panel__header', 'interface-complementary-area-header', className),
    tabIndex: -1,
    children: [children, toggleButton]
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ComplementaryAreaHeader);
//# sourceMappingURL=index.js.map

/***/ },

/***/ "./node_modules/@wordpress/interface/build-module/components/complementary-area-more-menu-item/index.js"
/*!**************************************************************************************************************!*\
  !*** ./node_modules/@wordpress/interface/build-module/components/complementary-area-more-menu-item/index.js ***!
  \**************************************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ComplementaryAreaMoreMenuItem)
/* harmony export */ });
/* harmony import */ var _wordpress_icons__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/icons */ "./node_modules/@wordpress/interface/node_modules/@wordpress/icons/build-module/library/check.js");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _complementary_area_toggle__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../complementary-area-toggle */ "./node_modules/@wordpress/interface/build-module/components/complementary-area-toggle/index.js");
/* harmony import */ var _action_item__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../action-item */ "./node_modules/@wordpress/interface/build-module/components/action-item/index.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__);
/**
 * WordPress dependencies
 */



/**
 * Internal dependencies
 */



const PluginsMenuItem = ({
  // Menu item is marked with unstable prop for backward compatibility.
  // They are removed so they don't leak to DOM elements.
  // @see https://github.com/WordPress/gutenberg/issues/14457
  __unstableExplicitMenuItem,
  __unstableTarget,
  ...restProps
}) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.MenuItem, {
  ...restProps
});
function ComplementaryAreaMoreMenuItem({
  scope,
  target,
  __unstableExplicitMenuItem,
  ...props
}) {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_complementary_area_toggle__WEBPACK_IMPORTED_MODULE_2__["default"], {
    as: toggleProps => {
      return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_action_item__WEBPACK_IMPORTED_MODULE_3__["default"], {
        __unstableExplicitMenuItem: __unstableExplicitMenuItem,
        __unstableTarget: `${scope}/${target}`,
        as: PluginsMenuItem,
        name: `${scope}/plugin-more-menu`,
        ...toggleProps
      });
    },
    role: "menuitemcheckbox",
    selectedIcon: _wordpress_icons__WEBPACK_IMPORTED_MODULE_0__["default"],
    name: target,
    scope: scope,
    ...props
  });
}
//# sourceMappingURL=index.js.map

/***/ },

/***/ "./node_modules/@wordpress/interface/build-module/components/complementary-area-toggle/index.js"
/*!******************************************************************************************************!*\
  !*** ./node_modules/@wordpress/interface/build-module/components/complementary-area-toggle/index.js ***!
  \******************************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ComplementaryAreaToggle)
/* harmony export */ });
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_plugins__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/plugins */ "@wordpress/plugins");
/* harmony import */ var _wordpress_plugins__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_plugins__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../store */ "./node_modules/@wordpress/interface/build-module/store/index.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__);
/**
 * WordPress dependencies
 */




/**
 * Internal dependencies
 */


/**
 * Whether the role supports checked state.
 *
 * @see https://www.w3.org/TR/wai-aria-1.1/#aria-checked
 * @param {import('react').AriaRole} role Role.
 * @return {boolean} Whether the role supports checked state.
 */

function roleSupportsCheckedState(role) {
  return ['checkbox', 'option', 'radio', 'switch', 'menuitemcheckbox', 'menuitemradio', 'treeitem'].includes(role);
}
function ComplementaryAreaToggle({
  as = _wordpress_components__WEBPACK_IMPORTED_MODULE_0__.Button,
  scope,
  identifier: identifierProp,
  icon: iconProp,
  selectedIcon,
  name,
  shortcut,
  ...props
}) {
  const ComponentToUse = as;
  const context = (0,_wordpress_plugins__WEBPACK_IMPORTED_MODULE_2__.usePluginContext)();
  const icon = iconProp || context.icon;
  const identifier = identifierProp || `${context.name}/${name}`;
  const isSelected = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_1__.useSelect)(select => select(_store__WEBPACK_IMPORTED_MODULE_3__.store).getActiveComplementaryArea(scope) === identifier, [identifier, scope]);
  const {
    enableComplementaryArea,
    disableComplementaryArea
  } = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_1__.useDispatch)(_store__WEBPACK_IMPORTED_MODULE_3__.store);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(ComponentToUse, {
    icon: selectedIcon && isSelected ? selectedIcon : icon,
    "aria-controls": identifier.replace('/', ':')
    // Make sure aria-checked matches spec https://www.w3.org/TR/wai-aria-1.1/#aria-checked
    ,
    "aria-checked": roleSupportsCheckedState(props.role) ? isSelected : undefined,
    onClick: () => {
      if (isSelected) {
        disableComplementaryArea(scope);
      } else {
        enableComplementaryArea(scope, identifier);
      }
    },
    shortcut: shortcut,
    ...props
  });
}
//# sourceMappingURL=index.js.map

/***/ },

/***/ "./node_modules/@wordpress/interface/build-module/components/complementary-area/index.js"
/*!***********************************************************************************************!*\
  !*** ./node_modules/@wordpress/interface/build-module/components/complementary-area/index.js ***!
  \***********************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! clsx */ "./node_modules/clsx/dist/clsx.mjs");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_icons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/icons */ "./node_modules/@wordpress/interface/node_modules/@wordpress/icons/build-module/library/check.js");
/* harmony import */ var _wordpress_icons__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/icons */ "./node_modules/@wordpress/interface/node_modules/@wordpress/icons/build-module/library/star-empty.js");
/* harmony import */ var _wordpress_icons__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @wordpress/icons */ "./node_modules/@wordpress/interface/node_modules/@wordpress/icons/build-module/library/star-filled.js");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _wordpress_viewport__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @wordpress/viewport */ "@wordpress/viewport");
/* harmony import */ var _wordpress_viewport__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_wordpress_viewport__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _wordpress_preferences__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @wordpress/preferences */ "@wordpress/preferences");
/* harmony import */ var _wordpress_preferences__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_wordpress_preferences__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @wordpress/compose */ "@wordpress/compose");
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_wordpress_compose__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _wordpress_plugins__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @wordpress/plugins */ "@wordpress/plugins");
/* harmony import */ var _wordpress_plugins__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_wordpress_plugins__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _complementary_area_header__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../complementary-area-header */ "./node_modules/@wordpress/interface/build-module/components/complementary-area-header/index.js");
/* harmony import */ var _complementary_area_more_menu_item__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../complementary-area-more-menu-item */ "./node_modules/@wordpress/interface/build-module/components/complementary-area-more-menu-item/index.js");
/* harmony import */ var _complementary_area_toggle__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../complementary-area-toggle */ "./node_modules/@wordpress/interface/build-module/components/complementary-area-toggle/index.js");
/* harmony import */ var _pinned_items__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../pinned-items */ "./node_modules/@wordpress/interface/build-module/components/pinned-items/index.js");
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../store */ "./node_modules/@wordpress/interface/build-module/store/index.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__);
/**
 * External dependencies
 */


/**
 * WordPress dependencies
 */










/**
 * Internal dependencies
 */






const ANIMATION_DURATION = 0.3;
function ComplementaryAreaSlot({
  scope,
  ...props
}) {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Slot, {
    name: `ComplementaryArea/${scope}`,
    ...props
  });
}
const SIDEBAR_WIDTH = 280;
const variants = {
  open: {
    width: SIDEBAR_WIDTH
  },
  closed: {
    width: 0
  },
  mobileOpen: {
    width: '100vw'
  }
};
function ComplementaryAreaFill({
  activeArea,
  isActive,
  scope,
  children,
  className,
  id
}) {
  const disableMotion = (0,_wordpress_compose__WEBPACK_IMPORTED_MODULE_10__.useReducedMotion)();
  const isMobileViewport = (0,_wordpress_compose__WEBPACK_IMPORTED_MODULE_10__.useViewportMatch)('medium', '<');
  // This is used to delay the exit animation to the next tick.
  // The reason this is done is to allow us to apply the right transition properties
  // When we switch from an open sidebar to another open sidebar.
  // we don't want to animate in this case.
  const previousActiveArea = (0,_wordpress_compose__WEBPACK_IMPORTED_MODULE_10__.usePrevious)(activeArea);
  const previousIsActive = (0,_wordpress_compose__WEBPACK_IMPORTED_MODULE_10__.usePrevious)(isActive);
  const [, setState] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_7__.useState)({});
  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_7__.useEffect)(() => {
    setState({});
  }, [isActive]);
  const transition = {
    type: 'tween',
    duration: disableMotion || isMobileViewport || !!previousActiveArea && !!activeArea && activeArea !== previousActiveArea ? 0 : ANIMATION_DURATION,
    ease: [0.6, 0, 0.4, 1]
  };
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Fill, {
    name: `ComplementaryArea/${scope}`,
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.__unstableAnimatePresence, {
      initial: false,
      children: (previousIsActive || isActive) && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.__unstableMotion.div, {
        variants: variants,
        initial: "closed",
        animate: isMobileViewport ? 'mobileOpen' : 'open',
        exit: "closed",
        transition: transition,
        className: "interface-complementary-area__fill",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx)("div", {
          id: id,
          className: className,
          style: {
            width: isMobileViewport ? '100vw' : SIDEBAR_WIDTH
          },
          children: children
        })
      })
    })
  });
}
function useAdjustComplementaryListener(scope, identifier, activeArea, isActive, isSmall) {
  const previousIsSmallRef = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_7__.useRef)(false);
  const shouldOpenWhenNotSmallRef = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_7__.useRef)(false);
  const {
    enableComplementaryArea,
    disableComplementaryArea
  } = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_2__.useDispatch)(_store__WEBPACK_IMPORTED_MODULE_16__.store);
  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_7__.useEffect)(() => {
    // If the complementary area is active and the editor is switching from
    // a big to a small window size.
    if (isActive && isSmall && !previousIsSmallRef.current) {
      disableComplementaryArea(scope);
      // Flag the complementary area to be reopened when the window size
      // goes from small to big.
      shouldOpenWhenNotSmallRef.current = true;
    } else if (
    // If there is a flag indicating the complementary area should be
    // enabled when we go from small to big window size and we are going
    // from a small to big window size.
    shouldOpenWhenNotSmallRef.current && !isSmall && previousIsSmallRef.current) {
      // Remove the flag indicating the complementary area should be
      // enabled.
      shouldOpenWhenNotSmallRef.current = false;
      enableComplementaryArea(scope, identifier);
    } else if (
    // If the flag is indicating the current complementary should be
    // reopened but another complementary area becomes active, remove
    // the flag.
    shouldOpenWhenNotSmallRef.current && activeArea && activeArea !== identifier) {
      shouldOpenWhenNotSmallRef.current = false;
    }
    if (isSmall !== previousIsSmallRef.current) {
      previousIsSmallRef.current = isSmall;
    }
  }, [isActive, isSmall, scope, identifier, activeArea, disableComplementaryArea, enableComplementaryArea]);
}
function ComplementaryArea({
  children,
  className,
  closeLabel = (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Close plugin'),
  identifier: identifierProp,
  header,
  headerClassName,
  icon: iconProp,
  isPinnable = true,
  panelClassName,
  scope,
  name,
  title,
  toggleShortcut,
  isActiveByDefault
}) {
  const context = (0,_wordpress_plugins__WEBPACK_IMPORTED_MODULE_11__.usePluginContext)();
  const icon = iconProp || context.icon;
  const identifier = identifierProp || `${context.name}/${name}`;

  // This state is used to delay the rendering of the Fill
  // until the initial effect runs.
  // This prevents the animation from running on mount if
  // the complementary area is active by default.
  const [isReady, setIsReady] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_7__.useState)(false);
  const {
    isLoading,
    isActive,
    isPinned,
    activeArea,
    isSmall,
    isLarge,
    showIconLabels
  } = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_2__.useSelect)(select => {
    const {
      getActiveComplementaryArea,
      isComplementaryAreaLoading,
      isItemPinned
    } = select(_store__WEBPACK_IMPORTED_MODULE_16__.store);
    const {
      get
    } = select(_wordpress_preferences__WEBPACK_IMPORTED_MODULE_9__.store);
    const _activeArea = getActiveComplementaryArea(scope);
    return {
      isLoading: isComplementaryAreaLoading(scope),
      isActive: _activeArea === identifier,
      isPinned: isItemPinned(scope, identifier),
      activeArea: _activeArea,
      isSmall: select(_wordpress_viewport__WEBPACK_IMPORTED_MODULE_8__.store).isViewportMatch('< medium'),
      isLarge: select(_wordpress_viewport__WEBPACK_IMPORTED_MODULE_8__.store).isViewportMatch('large'),
      showIconLabels: get('core', 'showIconLabels')
    };
  }, [identifier, scope]);
  const isMobileViewport = (0,_wordpress_compose__WEBPACK_IMPORTED_MODULE_10__.useViewportMatch)('medium', '<');
  useAdjustComplementaryListener(scope, identifier, activeArea, isActive, isSmall);
  const {
    enableComplementaryArea,
    disableComplementaryArea,
    pinItem,
    unpinItem
  } = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_2__.useDispatch)(_store__WEBPACK_IMPORTED_MODULE_16__.store);
  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_7__.useEffect)(() => {
    // Set initial visibility: For large screens, enable if it's active by
    // default. For small screens, always initially disable.
    if (isActiveByDefault && activeArea === undefined && !isSmall) {
      enableComplementaryArea(scope, identifier);
    } else if (activeArea === undefined && isSmall) {
      disableComplementaryArea(scope, identifier);
    }
    setIsReady(true);
  }, [activeArea, isActiveByDefault, scope, identifier, isSmall, enableComplementaryArea, disableComplementaryArea]);
  if (!isReady) {
    return;
  }
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.Fragment, {
    children: [isPinnable && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx)(_pinned_items__WEBPACK_IMPORTED_MODULE_15__["default"], {
      scope: scope,
      children: isPinned && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx)(_complementary_area_toggle__WEBPACK_IMPORTED_MODULE_14__["default"], {
        scope: scope,
        identifier: identifier,
        isPressed: isActive && (!showIconLabels || isLarge),
        "aria-expanded": isActive,
        "aria-disabled": isLoading,
        label: title,
        icon: showIconLabels ? _wordpress_icons__WEBPACK_IMPORTED_MODULE_4__["default"] : icon,
        showTooltip: !showIconLabels,
        variant: showIconLabels ? 'tertiary' : undefined,
        size: "compact",
        shortcut: toggleShortcut
      })
    }), name && isPinnable && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx)(_complementary_area_more_menu_item__WEBPACK_IMPORTED_MODULE_13__["default"], {
      target: name,
      scope: scope,
      icon: icon,
      children: title
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsxs)(ComplementaryAreaFill, {
      activeArea: activeArea,
      isActive: isActive,
      className: (0,clsx__WEBPACK_IMPORTED_MODULE_0__["default"])('interface-complementary-area', className),
      scope: scope,
      id: identifier.replace('/', ':'),
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx)(_complementary_area_header__WEBPACK_IMPORTED_MODULE_12__["default"], {
        className: headerClassName,
        closeLabel: closeLabel,
        onClose: () => disableComplementaryArea(scope),
        toggleButtonProps: {
          label: closeLabel,
          size: 'compact',
          shortcut: toggleShortcut,
          scope,
          identifier
        },
        children: header || /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.Fragment, {
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx)("h2", {
            className: "interface-complementary-area-header__title",
            children: title
          }), isPinnable && !isMobileViewport && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Button, {
            className: "interface-complementary-area__pin-unpin-item",
            icon: isPinned ? _wordpress_icons__WEBPACK_IMPORTED_MODULE_6__["default"] : _wordpress_icons__WEBPACK_IMPORTED_MODULE_5__["default"],
            label: isPinned ? (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Unpin from toolbar') : (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Pin to toolbar'),
            onClick: () => (isPinned ? unpinItem : pinItem)(scope, identifier),
            isPressed: isPinned,
            "aria-expanded": isPinned,
            size: "compact"
          })]
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Panel, {
        className: panelClassName,
        children: children
      })]
    })]
  });
}
ComplementaryArea.Slot = ComplementaryAreaSlot;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ComplementaryArea);
//# sourceMappingURL=index.js.map

/***/ },

/***/ "./node_modules/@wordpress/interface/build-module/components/fullscreen-mode/index.js"
/*!********************************************************************************************!*\
  !*** ./node_modules/@wordpress/interface/build-module/components/fullscreen-mode/index.js ***!
  \********************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/**
 * WordPress dependencies
 */

const FullscreenMode = ({
  isActive
}) => {
  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    let isSticky = false;
    // `is-fullscreen-mode` is set in PHP as a body class by Gutenberg, and this causes
    // `sticky-menu` to be applied by WordPress and prevents the admin menu being scrolled
    // even if `is-fullscreen-mode` is then removed. Let's remove `sticky-menu` here as
    // a consequence of the FullscreenMode setup.
    if (document.body.classList.contains('sticky-menu')) {
      isSticky = true;
      document.body.classList.remove('sticky-menu');
    }
    return () => {
      if (isSticky) {
        document.body.classList.add('sticky-menu');
      }
    };
  }, []);
  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (isActive) {
      document.body.classList.add('is-fullscreen-mode');
    } else {
      document.body.classList.remove('is-fullscreen-mode');
    }
    return () => {
      if (isActive) {
        document.body.classList.remove('is-fullscreen-mode');
      }
    };
  }, [isActive]);
  return null;
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (FullscreenMode);
//# sourceMappingURL=index.js.map

/***/ },

/***/ "./node_modules/@wordpress/interface/build-module/components/index.js"
/*!****************************************************************************!*\
  !*** ./node_modules/@wordpress/interface/build-module/components/index.js ***!
  \****************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ActionItem: () => (/* reexport safe */ _action_item__WEBPACK_IMPORTED_MODULE_5__["default"]),
/* harmony export */   ComplementaryArea: () => (/* reexport safe */ _complementary_area__WEBPACK_IMPORTED_MODULE_0__["default"]),
/* harmony export */   ComplementaryAreaMoreMenuItem: () => (/* reexport safe */ _complementary_area_more_menu_item__WEBPACK_IMPORTED_MODULE_1__["default"]),
/* harmony export */   FullscreenMode: () => (/* reexport safe */ _fullscreen_mode__WEBPACK_IMPORTED_MODULE_2__["default"]),
/* harmony export */   InterfaceSkeleton: () => (/* reexport safe */ _interface_skeleton__WEBPACK_IMPORTED_MODULE_3__["default"]),
/* harmony export */   NavigableRegion: () => (/* reexport safe */ _navigable_region__WEBPACK_IMPORTED_MODULE_6__["default"]),
/* harmony export */   PinnedItems: () => (/* reexport safe */ _pinned_items__WEBPACK_IMPORTED_MODULE_4__["default"])
/* harmony export */ });
/* harmony import */ var _complementary_area__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./complementary-area */ "./node_modules/@wordpress/interface/build-module/components/complementary-area/index.js");
/* harmony import */ var _complementary_area_more_menu_item__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./complementary-area-more-menu-item */ "./node_modules/@wordpress/interface/build-module/components/complementary-area-more-menu-item/index.js");
/* harmony import */ var _fullscreen_mode__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./fullscreen-mode */ "./node_modules/@wordpress/interface/build-module/components/fullscreen-mode/index.js");
/* harmony import */ var _interface_skeleton__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./interface-skeleton */ "./node_modules/@wordpress/interface/build-module/components/interface-skeleton/index.js");
/* harmony import */ var _pinned_items__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pinned-items */ "./node_modules/@wordpress/interface/build-module/components/pinned-items/index.js");
/* harmony import */ var _action_item__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./action-item */ "./node_modules/@wordpress/interface/build-module/components/action-item/index.js");
/* harmony import */ var _navigable_region__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./navigable-region */ "./node_modules/@wordpress/interface/build-module/components/navigable-region/index.js");







//# sourceMappingURL=index.js.map

/***/ },

/***/ "./node_modules/@wordpress/interface/build-module/components/interface-skeleton/index.js"
/*!***********************************************************************************************!*\
  !*** ./node_modules/@wordpress/interface/build-module/components/interface-skeleton/index.js ***!
  \***********************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! clsx */ "./node_modules/clsx/dist/clsx.mjs");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/compose */ "@wordpress/compose");
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_compose__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _navigable_region__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../navigable-region */ "./node_modules/@wordpress/interface/build-module/components/navigable-region/index.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__);
/**
 * External dependencies
 */


/**
 * WordPress dependencies
 */





/**
 * Internal dependencies
 */


const ANIMATION_DURATION = 0.25;
const commonTransition = {
  type: 'tween',
  duration: ANIMATION_DURATION,
  ease: [0.6, 0, 0.4, 1]
};
function useHTMLClass(className) {
  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    const element = document && document.querySelector(`html:not(.${className})`);
    if (!element) {
      return;
    }
    element.classList.toggle(className);
    return () => {
      element.classList.toggle(className);
    };
  }, [className]);
}
const headerVariants = {
  hidden: {
    opacity: 1,
    marginTop: -60
  },
  visible: {
    opacity: 1,
    marginTop: 0
  },
  distractionFreeHover: {
    opacity: 1,
    marginTop: 0,
    transition: {
      ...commonTransition,
      delay: 0.2,
      delayChildren: 0.2
    }
  },
  distractionFreeHidden: {
    opacity: 0,
    marginTop: -60
  },
  distractionFreeDisabled: {
    opacity: 0,
    marginTop: 0,
    transition: {
      ...commonTransition,
      delay: 0.8,
      delayChildren: 0.8
    }
  }
};
function InterfaceSkeleton({
  isDistractionFree,
  footer,
  header,
  editorNotices,
  sidebar,
  secondarySidebar,
  content,
  actions,
  labels,
  className
}, ref) {
  const [secondarySidebarResizeListener, secondarySidebarSize] = (0,_wordpress_compose__WEBPACK_IMPORTED_MODULE_4__.useResizeObserver)();
  const isMobileViewport = (0,_wordpress_compose__WEBPACK_IMPORTED_MODULE_4__.useViewportMatch)('medium', '<');
  const disableMotion = (0,_wordpress_compose__WEBPACK_IMPORTED_MODULE_4__.useReducedMotion)();
  const defaultTransition = {
    type: 'tween',
    duration: disableMotion ? 0 : ANIMATION_DURATION,
    ease: [0.6, 0, 0.4, 1]
  };
  useHTMLClass('interface-interface-skeleton__html-container');
  const defaultLabels = {
    /* translators: accessibility text for the top bar landmark region. */
    header: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__._x)('Header', 'header landmark area'),
    /* translators: accessibility text for the content landmark region. */
    body: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Content'),
    /* translators: accessibility text for the secondary sidebar landmark region. */
    secondarySidebar: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Block Library'),
    /* translators: accessibility text for the settings landmark region. */
    sidebar: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__._x)('Settings', 'settings landmark area'),
    /* translators: accessibility text for the publish landmark region. */
    actions: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Publish'),
    /* translators: accessibility text for the footer landmark region. */
    footer: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Footer')
  };
  const mergedLabels = {
    ...defaultLabels,
    ...labels
  };
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
    ref: ref,
    className: (0,clsx__WEBPACK_IMPORTED_MODULE_0__["default"])(className, 'interface-interface-skeleton', !!footer && 'has-footer'),
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
      className: "interface-interface-skeleton__editor",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.__unstableAnimatePresence, {
        initial: false,
        children: !!header && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_navigable_region__WEBPACK_IMPORTED_MODULE_5__["default"], {
          as: _wordpress_components__WEBPACK_IMPORTED_MODULE_2__.__unstableMotion.div,
          className: "interface-interface-skeleton__header",
          "aria-label": mergedLabels.header,
          initial: isDistractionFree && !isMobileViewport ? 'distractionFreeHidden' : 'hidden',
          whileHover: isDistractionFree && !isMobileViewport ? 'distractionFreeHover' : 'visible',
          animate: isDistractionFree && !isMobileViewport ? 'distractionFreeDisabled' : 'visible',
          exit: isDistractionFree && !isMobileViewport ? 'distractionFreeHidden' : 'hidden',
          variants: headerVariants,
          transition: defaultTransition,
          children: header
        })
      }), isDistractionFree && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("div", {
        className: "interface-interface-skeleton__header",
        children: editorNotices
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
        className: "interface-interface-skeleton__body",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.__unstableAnimatePresence, {
          initial: false,
          children: !!secondarySidebar && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_navigable_region__WEBPACK_IMPORTED_MODULE_5__["default"], {
            className: "interface-interface-skeleton__secondary-sidebar",
            ariaLabel: mergedLabels.secondarySidebar,
            as: _wordpress_components__WEBPACK_IMPORTED_MODULE_2__.__unstableMotion.div,
            initial: "closed",
            animate: "open",
            exit: "closed",
            variants: {
              open: {
                width: secondarySidebarSize.width
              },
              closed: {
                width: 0
              }
            },
            transition: defaultTransition,
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.__unstableMotion.div, {
              style: {
                position: 'absolute',
                width: isMobileViewport ? '100vw' : 'fit-content',
                height: '100%',
                left: 0
              },
              variants: {
                open: {
                  x: 0
                },
                closed: {
                  x: '-100%'
                }
              },
              transition: defaultTransition,
              children: [secondarySidebarResizeListener, secondarySidebar]
            })
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_navigable_region__WEBPACK_IMPORTED_MODULE_5__["default"], {
          className: "interface-interface-skeleton__content",
          ariaLabel: mergedLabels.body,
          children: content
        }), !!sidebar && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_navigable_region__WEBPACK_IMPORTED_MODULE_5__["default"], {
          className: "interface-interface-skeleton__sidebar",
          ariaLabel: mergedLabels.sidebar,
          children: sidebar
        }), !!actions && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_navigable_region__WEBPACK_IMPORTED_MODULE_5__["default"], {
          className: "interface-interface-skeleton__actions",
          ariaLabel: mergedLabels.actions,
          children: actions
        })]
      })]
    }), !!footer && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_navigable_region__WEBPACK_IMPORTED_MODULE_5__["default"], {
      className: "interface-interface-skeleton__footer",
      ariaLabel: mergedLabels.footer,
      children: footer
    })]
  });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.forwardRef)(InterfaceSkeleton));
//# sourceMappingURL=index.js.map

/***/ },

/***/ "./node_modules/@wordpress/interface/build-module/components/navigable-region/index.js"
/*!*********************************************************************************************!*\
  !*** ./node_modules/@wordpress/interface/build-module/components/navigable-region/index.js ***!
  \*********************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! clsx */ "./node_modules/clsx/dist/clsx.mjs");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__);
/**
 * WordPress dependencies
 */


/**
 * External dependencies
 */


const NavigableRegion = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(({
  children,
  className,
  ariaLabel,
  as: Tag = 'div',
  ...props
}, ref) => {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(Tag, {
    ref: ref,
    className: (0,clsx__WEBPACK_IMPORTED_MODULE_1__["default"])('interface-navigable-region', className),
    "aria-label": ariaLabel,
    role: "region",
    tabIndex: "-1",
    ...props,
    children: children
  });
});
NavigableRegion.displayName = 'NavigableRegion';
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (NavigableRegion);
//# sourceMappingURL=index.js.map

/***/ },

/***/ "./node_modules/@wordpress/interface/build-module/components/pinned-items/index.js"
/*!*****************************************************************************************!*\
  !*** ./node_modules/@wordpress/interface/build-module/components/pinned-items/index.js ***!
  \*****************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! clsx */ "./node_modules/clsx/dist/clsx.mjs");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__);
/**
 * External dependencies
 */


/**
 * WordPress dependencies
 */


function PinnedItems({
  scope,
  ...props
}) {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Fill, {
    name: `PinnedItems/${scope}`,
    ...props
  });
}
function PinnedItemsSlot({
  scope,
  className,
  ...props
}) {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Slot, {
    name: `PinnedItems/${scope}`,
    ...props,
    children: fills => fills?.length > 0 && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
      className: (0,clsx__WEBPACK_IMPORTED_MODULE_0__["default"])(className, 'interface-pinned-items'),
      children: fills
    })
  });
}
PinnedItems.Slot = PinnedItemsSlot;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PinnedItems);
//# sourceMappingURL=index.js.map

/***/ },

/***/ "./node_modules/@wordpress/interface/build-module/index.js"
/*!*****************************************************************!*\
  !*** ./node_modules/@wordpress/interface/build-module/index.js ***!
  \*****************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ActionItem: () => (/* reexport safe */ _components__WEBPACK_IMPORTED_MODULE_0__.ActionItem),
/* harmony export */   ComplementaryArea: () => (/* reexport safe */ _components__WEBPACK_IMPORTED_MODULE_0__.ComplementaryArea),
/* harmony export */   ComplementaryAreaMoreMenuItem: () => (/* reexport safe */ _components__WEBPACK_IMPORTED_MODULE_0__.ComplementaryAreaMoreMenuItem),
/* harmony export */   FullscreenMode: () => (/* reexport safe */ _components__WEBPACK_IMPORTED_MODULE_0__.FullscreenMode),
/* harmony export */   InterfaceSkeleton: () => (/* reexport safe */ _components__WEBPACK_IMPORTED_MODULE_0__.InterfaceSkeleton),
/* harmony export */   NavigableRegion: () => (/* reexport safe */ _components__WEBPACK_IMPORTED_MODULE_0__.NavigableRegion),
/* harmony export */   PinnedItems: () => (/* reexport safe */ _components__WEBPACK_IMPORTED_MODULE_0__.PinnedItems),
/* harmony export */   store: () => (/* reexport safe */ _store__WEBPACK_IMPORTED_MODULE_1__.store)
/* harmony export */ });
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components */ "./node_modules/@wordpress/interface/build-module/components/index.js");
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./store */ "./node_modules/@wordpress/interface/build-module/store/index.js");


//# sourceMappingURL=index.js.map

/***/ },

/***/ "./node_modules/@wordpress/interface/build-module/store/actions.js"
/*!*************************************************************************!*\
  !*** ./node_modules/@wordpress/interface/build-module/store/actions.js ***!
  \*************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   closeModal: () => (/* binding */ closeModal),
/* harmony export */   disableComplementaryArea: () => (/* binding */ disableComplementaryArea),
/* harmony export */   enableComplementaryArea: () => (/* binding */ enableComplementaryArea),
/* harmony export */   openModal: () => (/* binding */ openModal),
/* harmony export */   pinItem: () => (/* binding */ pinItem),
/* harmony export */   setDefaultComplementaryArea: () => (/* binding */ setDefaultComplementaryArea),
/* harmony export */   setFeatureDefaults: () => (/* binding */ setFeatureDefaults),
/* harmony export */   setFeatureValue: () => (/* binding */ setFeatureValue),
/* harmony export */   toggleFeature: () => (/* binding */ toggleFeature),
/* harmony export */   unpinItem: () => (/* binding */ unpinItem)
/* harmony export */ });
/* harmony import */ var _wordpress_deprecated__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/deprecated */ "@wordpress/deprecated");
/* harmony import */ var _wordpress_deprecated__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_deprecated__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_preferences__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/preferences */ "@wordpress/preferences");
/* harmony import */ var _wordpress_preferences__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_preferences__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _deprecated__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./deprecated */ "./node_modules/@wordpress/interface/build-module/store/deprecated.js");
/**
 * WordPress dependencies
 */



/**
 * Internal dependencies
 */


/**
 * Set a default complementary area.
 *
 * @param {string} scope Complementary area scope.
 * @param {string} area  Area identifier.
 *
 * @return {Object} Action object.
 */
const setDefaultComplementaryArea = (scope, area) => {
  scope = (0,_deprecated__WEBPACK_IMPORTED_MODULE_2__.normalizeComplementaryAreaScope)(scope);
  area = (0,_deprecated__WEBPACK_IMPORTED_MODULE_2__.normalizeComplementaryAreaName)(scope, area);
  return {
    type: 'SET_DEFAULT_COMPLEMENTARY_AREA',
    scope,
    area
  };
};

/**
 * Enable the complementary area.
 *
 * @param {string} scope Complementary area scope.
 * @param {string} area  Area identifier.
 */
const enableComplementaryArea = (scope, area) => ({
  registry,
  dispatch
}) => {
  // Return early if there's no area.
  if (!area) {
    return;
  }
  scope = (0,_deprecated__WEBPACK_IMPORTED_MODULE_2__.normalizeComplementaryAreaScope)(scope);
  area = (0,_deprecated__WEBPACK_IMPORTED_MODULE_2__.normalizeComplementaryAreaName)(scope, area);
  const isComplementaryAreaVisible = registry.select(_wordpress_preferences__WEBPACK_IMPORTED_MODULE_1__.store).get(scope, 'isComplementaryAreaVisible');
  if (!isComplementaryAreaVisible) {
    registry.dispatch(_wordpress_preferences__WEBPACK_IMPORTED_MODULE_1__.store).set(scope, 'isComplementaryAreaVisible', true);
  }
  dispatch({
    type: 'ENABLE_COMPLEMENTARY_AREA',
    scope,
    area
  });
};

/**
 * Disable the complementary area.
 *
 * @param {string} scope Complementary area scope.
 */
const disableComplementaryArea = scope => ({
  registry
}) => {
  scope = (0,_deprecated__WEBPACK_IMPORTED_MODULE_2__.normalizeComplementaryAreaScope)(scope);
  const isComplementaryAreaVisible = registry.select(_wordpress_preferences__WEBPACK_IMPORTED_MODULE_1__.store).get(scope, 'isComplementaryAreaVisible');
  if (isComplementaryAreaVisible) {
    registry.dispatch(_wordpress_preferences__WEBPACK_IMPORTED_MODULE_1__.store).set(scope, 'isComplementaryAreaVisible', false);
  }
};

/**
 * Pins an item.
 *
 * @param {string} scope Item scope.
 * @param {string} item  Item identifier.
 *
 * @return {Object} Action object.
 */
const pinItem = (scope, item) => ({
  registry
}) => {
  // Return early if there's no item.
  if (!item) {
    return;
  }
  scope = (0,_deprecated__WEBPACK_IMPORTED_MODULE_2__.normalizeComplementaryAreaScope)(scope);
  item = (0,_deprecated__WEBPACK_IMPORTED_MODULE_2__.normalizeComplementaryAreaName)(scope, item);
  const pinnedItems = registry.select(_wordpress_preferences__WEBPACK_IMPORTED_MODULE_1__.store).get(scope, 'pinnedItems');

  // The item is already pinned, there's nothing to do.
  if (pinnedItems?.[item] === true) {
    return;
  }
  registry.dispatch(_wordpress_preferences__WEBPACK_IMPORTED_MODULE_1__.store).set(scope, 'pinnedItems', {
    ...pinnedItems,
    [item]: true
  });
};

/**
 * Unpins an item.
 *
 * @param {string} scope Item scope.
 * @param {string} item  Item identifier.
 */
const unpinItem = (scope, item) => ({
  registry
}) => {
  // Return early if there's no item.
  if (!item) {
    return;
  }
  scope = (0,_deprecated__WEBPACK_IMPORTED_MODULE_2__.normalizeComplementaryAreaScope)(scope);
  item = (0,_deprecated__WEBPACK_IMPORTED_MODULE_2__.normalizeComplementaryAreaName)(scope, item);
  const pinnedItems = registry.select(_wordpress_preferences__WEBPACK_IMPORTED_MODULE_1__.store).get(scope, 'pinnedItems');
  registry.dispatch(_wordpress_preferences__WEBPACK_IMPORTED_MODULE_1__.store).set(scope, 'pinnedItems', {
    ...pinnedItems,
    [item]: false
  });
};

/**
 * Returns an action object used in signalling that a feature should be toggled.
 *
 * @param {string} scope       The feature scope (e.g. core/edit-post).
 * @param {string} featureName The feature name.
 */
function toggleFeature(scope, featureName) {
  return function ({
    registry
  }) {
    _wordpress_deprecated__WEBPACK_IMPORTED_MODULE_0___default()(`dispatch( 'core/interface' ).toggleFeature`, {
      since: '6.0',
      alternative: `dispatch( 'core/preferences' ).toggle`
    });
    registry.dispatch(_wordpress_preferences__WEBPACK_IMPORTED_MODULE_1__.store).toggle(scope, featureName);
  };
}

/**
 * Returns an action object used in signalling that a feature should be set to
 * a true or false value
 *
 * @param {string}  scope       The feature scope (e.g. core/edit-post).
 * @param {string}  featureName The feature name.
 * @param {boolean} value       The value to set.
 *
 * @return {Object} Action object.
 */
function setFeatureValue(scope, featureName, value) {
  return function ({
    registry
  }) {
    _wordpress_deprecated__WEBPACK_IMPORTED_MODULE_0___default()(`dispatch( 'core/interface' ).setFeatureValue`, {
      since: '6.0',
      alternative: `dispatch( 'core/preferences' ).set`
    });
    registry.dispatch(_wordpress_preferences__WEBPACK_IMPORTED_MODULE_1__.store).set(scope, featureName, !!value);
  };
}

/**
 * Returns an action object used in signalling that defaults should be set for features.
 *
 * @param {string}                  scope    The feature scope (e.g. core/edit-post).
 * @param {Object<string, boolean>} defaults A key/value map of feature names to values.
 *
 * @return {Object} Action object.
 */
function setFeatureDefaults(scope, defaults) {
  return function ({
    registry
  }) {
    _wordpress_deprecated__WEBPACK_IMPORTED_MODULE_0___default()(`dispatch( 'core/interface' ).setFeatureDefaults`, {
      since: '6.0',
      alternative: `dispatch( 'core/preferences' ).setDefaults`
    });
    registry.dispatch(_wordpress_preferences__WEBPACK_IMPORTED_MODULE_1__.store).setDefaults(scope, defaults);
  };
}

/**
 * Returns an action object used in signalling that the user opened a modal.
 *
 * @param {string} name A string that uniquely identifies the modal.
 *
 * @return {Object} Action object.
 */
function openModal(name) {
  return {
    type: 'OPEN_MODAL',
    name
  };
}

/**
 * Returns an action object signalling that the user closed a modal.
 *
 * @return {Object} Action object.
 */
function closeModal() {
  return {
    type: 'CLOSE_MODAL'
  };
}
//# sourceMappingURL=actions.js.map

/***/ },

/***/ "./node_modules/@wordpress/interface/build-module/store/constants.js"
/*!***************************************************************************!*\
  !*** ./node_modules/@wordpress/interface/build-module/store/constants.js ***!
  \***************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   STORE_NAME: () => (/* binding */ STORE_NAME)
/* harmony export */ });
/**
 * The identifier for the data store.
 *
 * @type {string}
 */
const STORE_NAME = 'core/interface';
//# sourceMappingURL=constants.js.map

/***/ },

/***/ "./node_modules/@wordpress/interface/build-module/store/deprecated.js"
/*!****************************************************************************!*\
  !*** ./node_modules/@wordpress/interface/build-module/store/deprecated.js ***!
  \****************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   normalizeComplementaryAreaName: () => (/* binding */ normalizeComplementaryAreaName),
/* harmony export */   normalizeComplementaryAreaScope: () => (/* binding */ normalizeComplementaryAreaScope)
/* harmony export */ });
/* harmony import */ var _wordpress_deprecated__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/deprecated */ "@wordpress/deprecated");
/* harmony import */ var _wordpress_deprecated__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_deprecated__WEBPACK_IMPORTED_MODULE_0__);
/**
 * WordPress dependencies
 */

function normalizeComplementaryAreaScope(scope) {
  if (['core/edit-post', 'core/edit-site'].includes(scope)) {
    _wordpress_deprecated__WEBPACK_IMPORTED_MODULE_0___default()(`${scope} interface scope`, {
      alternative: 'core interface scope',
      hint: 'core/edit-post and core/edit-site are merging.',
      version: '6.6'
    });
    return 'core';
  }
  return scope;
}
function normalizeComplementaryAreaName(scope, name) {
  if (scope === 'core' && name === 'edit-site/template') {
    _wordpress_deprecated__WEBPACK_IMPORTED_MODULE_0___default()(`edit-site/template sidebar`, {
      alternative: 'edit-post/document',
      version: '6.6'
    });
    return 'edit-post/document';
  }
  if (scope === 'core' && name === 'edit-site/block-inspector') {
    _wordpress_deprecated__WEBPACK_IMPORTED_MODULE_0___default()(`edit-site/block-inspector sidebar`, {
      alternative: 'edit-post/block',
      version: '6.6'
    });
    return 'edit-post/block';
  }
  return name;
}
//# sourceMappingURL=deprecated.js.map

/***/ },

/***/ "./node_modules/@wordpress/interface/build-module/store/index.js"
/*!***********************************************************************!*\
  !*** ./node_modules/@wordpress/interface/build-module/store/index.js ***!
  \***********************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   store: () => (/* binding */ store)
/* harmony export */ });
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./actions */ "./node_modules/@wordpress/interface/build-module/store/actions.js");
/* harmony import */ var _selectors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./selectors */ "./node_modules/@wordpress/interface/build-module/store/selectors.js");
/* harmony import */ var _reducer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./reducer */ "./node_modules/@wordpress/interface/build-module/store/reducer.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./constants */ "./node_modules/@wordpress/interface/build-module/store/constants.js");
/**
 * WordPress dependencies
 */


/**
 * Internal dependencies
 */





/**
 * Store definition for the interface namespace.
 *
 * @see https://github.com/WordPress/gutenberg/blob/HEAD/packages/data/README.md#createReduxStore
 *
 * @type {Object}
 */
const store = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_0__.createReduxStore)(_constants__WEBPACK_IMPORTED_MODULE_4__.STORE_NAME, {
  reducer: _reducer__WEBPACK_IMPORTED_MODULE_3__["default"],
  actions: _actions__WEBPACK_IMPORTED_MODULE_1__,
  selectors: _selectors__WEBPACK_IMPORTED_MODULE_2__
});
(0,_wordpress_data__WEBPACK_IMPORTED_MODULE_0__.register)(store);
//# sourceMappingURL=index.js.map

/***/ },

/***/ "./node_modules/@wordpress/interface/build-module/store/reducer.js"
/*!*************************************************************************!*\
  !*** ./node_modules/@wordpress/interface/build-module/store/reducer.js ***!
  \*************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   activeModal: () => (/* binding */ activeModal),
/* harmony export */   complementaryAreas: () => (/* binding */ complementaryAreas),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_0__);
/**
 * WordPress dependencies
 */

function complementaryAreas(state = {}, action) {
  switch (action.type) {
    case 'SET_DEFAULT_COMPLEMENTARY_AREA':
      {
        const {
          scope,
          area
        } = action;

        // If there's already an area, don't overwrite it.
        if (state[scope]) {
          return state;
        }
        return {
          ...state,
          [scope]: area
        };
      }
    case 'ENABLE_COMPLEMENTARY_AREA':
      {
        const {
          scope,
          area
        } = action;
        return {
          ...state,
          [scope]: area
        };
      }
  }
  return state;
}

/**
 * Reducer for storing the name of the open modal, or null if no modal is open.
 *
 * @param {Object} state  Previous state.
 * @param {Object} action Action object containing the `name` of the modal
 *
 * @return {Object} Updated state
 */
function activeModal(state = null, action) {
  switch (action.type) {
    case 'OPEN_MODAL':
      return action.name;
    case 'CLOSE_MODAL':
      return null;
  }
  return state;
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_wordpress_data__WEBPACK_IMPORTED_MODULE_0__.combineReducers)({
  complementaryAreas,
  activeModal
}));
//# sourceMappingURL=reducer.js.map

/***/ },

/***/ "./node_modules/@wordpress/interface/build-module/store/selectors.js"
/*!***************************************************************************!*\
  !*** ./node_modules/@wordpress/interface/build-module/store/selectors.js ***!
  \***************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getActiveComplementaryArea: () => (/* binding */ getActiveComplementaryArea),
/* harmony export */   isComplementaryAreaLoading: () => (/* binding */ isComplementaryAreaLoading),
/* harmony export */   isFeatureActive: () => (/* binding */ isFeatureActive),
/* harmony export */   isItemPinned: () => (/* binding */ isItemPinned),
/* harmony export */   isModalActive: () => (/* binding */ isModalActive)
/* harmony export */ });
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_deprecated__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/deprecated */ "@wordpress/deprecated");
/* harmony import */ var _wordpress_deprecated__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_deprecated__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_preferences__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/preferences */ "@wordpress/preferences");
/* harmony import */ var _wordpress_preferences__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_preferences__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _deprecated__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./deprecated */ "./node_modules/@wordpress/interface/build-module/store/deprecated.js");
/**
 * WordPress dependencies
 */




/**
 * Internal dependencies
 */


/**
 * Returns the complementary area that is active in a given scope.
 *
 * @param {Object} state Global application state.
 * @param {string} scope Item scope.
 *
 * @return {string | null | undefined} The complementary area that is active in the given scope.
 */
const getActiveComplementaryArea = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_0__.createRegistrySelector)(select => (state, scope) => {
  scope = (0,_deprecated__WEBPACK_IMPORTED_MODULE_3__.normalizeComplementaryAreaScope)(scope);
  const isComplementaryAreaVisible = select(_wordpress_preferences__WEBPACK_IMPORTED_MODULE_2__.store).get(scope, 'isComplementaryAreaVisible');

  // Return `undefined` to indicate that the user has never toggled
  // visibility, this is the vanilla default. Other code relies on this
  // nuance in the return value.
  if (isComplementaryAreaVisible === undefined) {
    return undefined;
  }

  // Return `null` to indicate the user hid the complementary area.
  if (isComplementaryAreaVisible === false) {
    return null;
  }
  return state?.complementaryAreas?.[scope];
});
const isComplementaryAreaLoading = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_0__.createRegistrySelector)(select => (state, scope) => {
  scope = (0,_deprecated__WEBPACK_IMPORTED_MODULE_3__.normalizeComplementaryAreaScope)(scope);
  const isVisible = select(_wordpress_preferences__WEBPACK_IMPORTED_MODULE_2__.store).get(scope, 'isComplementaryAreaVisible');
  const identifier = state?.complementaryAreas?.[scope];
  return isVisible && identifier === undefined;
});

/**
 * Returns a boolean indicating if an item is pinned or not.
 *
 * @param {Object} state Global application state.
 * @param {string} scope Scope.
 * @param {string} item  Item to check.
 *
 * @return {boolean} True if the item is pinned and false otherwise.
 */
const isItemPinned = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_0__.createRegistrySelector)(select => (state, scope, item) => {
  var _pinnedItems$item;
  scope = (0,_deprecated__WEBPACK_IMPORTED_MODULE_3__.normalizeComplementaryAreaScope)(scope);
  item = (0,_deprecated__WEBPACK_IMPORTED_MODULE_3__.normalizeComplementaryAreaName)(scope, item);
  const pinnedItems = select(_wordpress_preferences__WEBPACK_IMPORTED_MODULE_2__.store).get(scope, 'pinnedItems');
  return (_pinnedItems$item = pinnedItems?.[item]) !== null && _pinnedItems$item !== void 0 ? _pinnedItems$item : true;
});

/**
 * Returns a boolean indicating whether a feature is active for a particular
 * scope.
 *
 * @param {Object} state       The store state.
 * @param {string} scope       The scope of the feature (e.g. core/edit-post).
 * @param {string} featureName The name of the feature.
 *
 * @return {boolean} Is the feature enabled?
 */
const isFeatureActive = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_0__.createRegistrySelector)(select => (state, scope, featureName) => {
  _wordpress_deprecated__WEBPACK_IMPORTED_MODULE_1___default()(`select( 'core/interface' ).isFeatureActive( scope, featureName )`, {
    since: '6.0',
    alternative: `select( 'core/preferences' ).get( scope, featureName )`
  });
  return !!select(_wordpress_preferences__WEBPACK_IMPORTED_MODULE_2__.store).get(scope, featureName);
});

/**
 * Returns true if a modal is active, or false otherwise.
 *
 * @param {Object} state     Global application state.
 * @param {string} modalName A string that uniquely identifies the modal.
 *
 * @return {boolean} Whether the modal is active.
 */
function isModalActive(state, modalName) {
  return state.activeModal === modalName;
}
//# sourceMappingURL=selectors.js.map

/***/ },

/***/ "./node_modules/@wordpress/interface/node_modules/@wordpress/icons/build-module/library/check.js"
/*!*******************************************************************************************************!*\
  !*** ./node_modules/@wordpress/interface/node_modules/@wordpress/icons/build-module/library/check.js ***!
  \*******************************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/primitives */ "@wordpress/primitives");
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__);
/**
 * WordPress dependencies
 */


const check = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_0__.SVG, {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24",
  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_0__.Path, {
    d: "M16.7 7.1l-6.3 8.5-3.3-2.5-.9 1.2 4.5 3.4L17.9 8z"
  })
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (check);
//# sourceMappingURL=check.js.map

/***/ },

/***/ "./node_modules/@wordpress/interface/node_modules/@wordpress/icons/build-module/library/close-small.js"
/*!*************************************************************************************************************!*\
  !*** ./node_modules/@wordpress/interface/node_modules/@wordpress/icons/build-module/library/close-small.js ***!
  \*************************************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/primitives */ "@wordpress/primitives");
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__);
/**
 * WordPress dependencies
 */


const closeSmall = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_0__.SVG, {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24",
  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_0__.Path, {
    d: "M12 13.06l3.712 3.713 1.061-1.06L13.061 12l3.712-3.712-1.06-1.06L12 10.938 8.288 7.227l-1.061 1.06L10.939 12l-3.712 3.712 1.06 1.061L12 13.061z"
  })
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (closeSmall);
//# sourceMappingURL=close-small.js.map

/***/ },

/***/ "./node_modules/@wordpress/interface/node_modules/@wordpress/icons/build-module/library/star-empty.js"
/*!************************************************************************************************************!*\
  !*** ./node_modules/@wordpress/interface/node_modules/@wordpress/icons/build-module/library/star-empty.js ***!
  \************************************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/primitives */ "@wordpress/primitives");
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__);
/**
 * WordPress dependencies
 */


const starEmpty = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_0__.SVG, {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24",
  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_0__.Path, {
    fillRule: "evenodd",
    d: "M9.706 8.646a.25.25 0 01-.188.137l-4.626.672a.25.25 0 00-.139.427l3.348 3.262a.25.25 0 01.072.222l-.79 4.607a.25.25 0 00.362.264l4.138-2.176a.25.25 0 01.233 0l4.137 2.175a.25.25 0 00.363-.263l-.79-4.607a.25.25 0 01.072-.222l3.347-3.262a.25.25 0 00-.139-.427l-4.626-.672a.25.25 0 01-.188-.137l-2.069-4.192a.25.25 0 00-.448 0L9.706 8.646zM12 7.39l-.948 1.921a1.75 1.75 0 01-1.317.957l-2.12.308 1.534 1.495c.412.402.6.982.503 1.55l-.362 2.11 1.896-.997a1.75 1.75 0 011.629 0l1.895.997-.362-2.11a1.75 1.75 0 01.504-1.55l1.533-1.495-2.12-.308a1.75 1.75 0 01-1.317-.957L12 7.39z",
    clipRule: "evenodd"
  })
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (starEmpty);
//# sourceMappingURL=star-empty.js.map

/***/ },

/***/ "./node_modules/@wordpress/interface/node_modules/@wordpress/icons/build-module/library/star-filled.js"
/*!*************************************************************************************************************!*\
  !*** ./node_modules/@wordpress/interface/node_modules/@wordpress/icons/build-module/library/star-filled.js ***!
  \*************************************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/primitives */ "@wordpress/primitives");
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__);
/**
 * WordPress dependencies
 */


const starFilled = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_0__.SVG, {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24",
  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_0__.Path, {
    d: "M11.776 4.454a.25.25 0 01.448 0l2.069 4.192a.25.25 0 00.188.137l4.626.672a.25.25 0 01.139.426l-3.348 3.263a.25.25 0 00-.072.222l.79 4.607a.25.25 0 01-.362.263l-4.138-2.175a.25.25 0 00-.232 0l-4.138 2.175a.25.25 0 01-.363-.263l.79-4.607a.25.25 0 00-.071-.222L4.754 9.881a.25.25 0 01.139-.426l4.626-.672a.25.25 0 00.188-.137l2.069-4.192z"
  })
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (starFilled);
//# sourceMappingURL=star-filled.js.map

/***/ },

/***/ "./src/WpAi.js"
/*!*********************!*\
  !*** ./src/WpAi.js ***!
  \*********************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ WpAi)
/* harmony export */ });
/* harmony import */ var wp_interface__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! wp-interface */ "./node_modules/wp-interface/build-module/index.js");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _sections_SiteInfo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./sections/SiteInfo */ "./src/sections/SiteInfo.js");
/* harmony import */ var _sections_PostTitles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./sections/PostTitles */ "./src/sections/PostTitles.js");
/* harmony import */ var _sections_ImageGeneration__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./sections/ImageGeneration */ "./src/sections/ImageGeneration.js");
/* harmony import */ var _sections_AltTextGeneration__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./sections/AltTextGeneration */ "./src/sections/AltTextGeneration.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__);







function WpAi() {
  const labels = {};
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(wp_interface__WEBPACK_IMPORTED_MODULE_0__.App, {
    scope: "wp-ai",
    labels: labels,
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(wp_interface__WEBPACK_IMPORTED_MODULE_0__.Header, {
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("h1", {
        children: "WP AI"
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("div", {
      className: "wp-ai-content",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.TabPanel, {
        onSelect: () => {},
        tabs: [{
          name: 'tab1',
          title: 'Site Info'
        }, {
          name: 'tab2',
          title: 'Title Suggestions'
        }, {
          name: 'tab3',
          title: 'Image Generation'
        }, {
          name: 'tab4',
          title: 'Alt Text Generation'
        }],
        children: tab => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
          children: [tab.name === 'tab1' && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_sections_SiteInfo__WEBPACK_IMPORTED_MODULE_2__["default"], {}), tab.name === 'tab2' && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_sections_PostTitles__WEBPACK_IMPORTED_MODULE_3__["default"], {}), tab.name === 'tab3' && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_sections_ImageGeneration__WEBPACK_IMPORTED_MODULE_4__["default"], {}), tab.name === 'tab4' && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_sections_AltTextGeneration__WEBPACK_IMPORTED_MODULE_5__["default"], {})]
        })
      })
    })]
  });
}

/***/ },

/***/ "./src/sections/AltTextGeneration.js"
/*!*******************************************!*\
  !*** ./src/sections/AltTextGeneration.js ***!
  \*******************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ AltTextGeneration)
/* harmony export */ });
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_abilities__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/abilities */ "@wordpress/abilities");
/* harmony import */ var _wordpress_abilities__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_abilities__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__);




function AltTextGeneration() {
  const [imageDataUri, setImageDataUri] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
  const [altText, setAltText] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useState)('');
  const [loading, setLoading] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
  const [error, setError] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
  const fileInputRef = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);

  // Handle file selection
  const handleFileChange = event => {
    const file = event.target.files[0];
    if (!file) {
      return;
    }

    // Validate file type
    if (!file.type.startsWith('image/')) {
      setError('Please select a valid image file.');
      return;
    }

    // Validate file size (max 10MB)
    if (file.size > 10 * 1024 * 1024) {
      setError('Image size must be less than 10MB.');
      return;
    }
    setError(null);

    // Read file as data URL
    const reader = new FileReader();
    reader.onload = e => {
      setImageDataUri(e.target.result);
      setAltText(''); // Clear previous alt text
    };
    reader.onerror = () => {
      setError('Failed to read the image file.');
    };
    reader.readAsDataURL(file);
  };

  // Generate alt text
  const handleGenerateAltText = async () => {
    if (!imageDataUri) {
      return;
    }
    setLoading(true);
    setError(null);
    try {
      const response = await (0,_wordpress_abilities__WEBPACK_IMPORTED_MODULE_2__.executeAbility)('wp-ai/alt-text-generation', {
        image: imageDataUri
      });
      if (response && response.alt_text) {
        setAltText(response.alt_text);
      } else {
        setError('Failed to generate alt text. Please try again.');
      }
    } catch (err) {
      setError(err.message || 'An error occurred while generating alt text.');
    } finally {
      setLoading(false);
    }
  };

  // Copy to clipboard
  const handleCopyToClipboard = () => {
    navigator.clipboard.writeText(altText);
  };

  // Reset form
  const handleReset = () => {
    setImageDataUri(null);
    setAltText('');
    setError(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.Card, {
    style: {
      maxWidth: '650px'
    },
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.CardBody, {
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("h2", {
        style: {
          marginTop: 0
        },
        children: "Upload Image"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
        style: {
          marginBottom: '16px'
        },
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("input", {
          ref: fileInputRef,
          type: "file",
          accept: "image/*",
          onChange: handleFileChange,
          style: {
            display: 'block',
            marginBottom: '8px',
            padding: '8px',
            border: '1px solid #ddd',
            borderRadius: '4px',
            width: '100%'
          }
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("p", {
          style: {
            margin: '4px 0',
            fontSize: '12px',
            color: '#666'
          },
          children: "Supported formats: JPG, PNG, GIF, WebP (max 10MB)"
        })]
      }), error && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
        style: {
          padding: '12px',
          backgroundColor: '#f8d7da',
          color: '#721c24',
          borderRadius: '4px',
          marginBottom: '16px'
        },
        children: error
      }), imageDataUri && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
        style: {
          marginBottom: '16px'
        },
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("img", {
          src: imageDataUri,
          alt: "Preview",
          style: {
            maxWidth: '100%',
            height: 'auto',
            display: 'block',
            border: '1px solid #ddd',
            borderRadius: '4px'
          }
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
        style: {
          display: 'flex',
          gap: '8px'
        },
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.Button, {
          variant: "primary",
          onClick: handleGenerateAltText,
          disabled: !imageDataUri || loading,
          children: loading ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.Fragment, {
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.Spinner, {
              style: {
                marginRight: '8px'
              }
            }), "Generating..."]
          }) : 'Generate Alt Text'
        }), imageDataUri && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.Button, {
          variant: "secondary",
          onClick: handleReset,
          children: "Reset"
        })]
      })]
    }), altText && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.CardBody, {
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("h2", {
        style: {
          marginTop: 0
        },
        children: "Generated Alt Text"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
        style: {
          padding: '12px',
          backgroundColor: '#f0f0f0',
          border: '1px solid #ddd',
          borderRadius: '4px',
          marginBottom: '16px',
          fontSize: '14px',
          lineHeight: '1.5'
        },
        children: altText
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
        style: {
          display: 'flex',
          gap: '8px'
        },
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.Button, {
          variant: "secondary",
          onClick: handleCopyToClipboard,
          children: "Copy to Clipboard"
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("p", {
        style: {
          margin: '8px 0',
          fontSize: '12px',
          color: '#666'
        },
        children: ["Character count: ", altText.length, altText.length > 125 && altText.length <= 250 && ' (longer than ideal)', altText.length > 250 && ' (too long - consider shortening)']
      })]
    })]
  });
}

/***/ },

/***/ "./src/sections/ImageGeneration.js"
/*!*****************************************!*\
  !*** ./src/sections/ImageGeneration.js ***!
  \*****************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ImageGeneration)
/* harmony export */ });
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_abilities__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/abilities */ "@wordpress/abilities");
/* harmony import */ var _wordpress_abilities__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_abilities__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__);





function ImageGeneration() {
  const [topic, setTopic] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useState)('');
  const [result, setResult] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
  const handleOnClick = () => {
    (0,_wordpress_abilities__WEBPACK_IMPORTED_MODULE_2__.executeAbility)('wp-ai/image-generation', {
      topic
    }).then(response => {
      setResult(response);
    });
  };
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.Card, {
    style: {
      maxWidth: '650px'
    },
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.CardBody, {
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.__experimentalInputControl, {
        label: "Topic",
        placeholder: "e.g., Winter travel destination from train window",
        value: topic,
        onChange: value => setTopic(value),
        __next40pxDefaultSize: true
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.Button, {
        variant: "primary",
        onClick: handleOnClick,
        style: {
          marginTop: '16px'
        },
        children: "Generate Image"
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.CardBody, {
      children: result && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("img", {
        src: result,
        alt: "Generated image",
        style: {
          maxWidth: '100%',
          height: 'auto',
          display: 'block'
        }
      })
    })]
  });
}

/***/ },

/***/ "./src/sections/PostTitles.js"
/*!************************************!*\
  !*** ./src/sections/PostTitles.js ***!
  \************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ PostTitles)
/* harmony export */ });
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_abilities__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/abilities */ "@wordpress/abilities");
/* harmony import */ var _wordpress_abilities__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_abilities__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__);





function PostTitles() {
  const [topic, setTopic] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useState)('');
  const [result, setResult] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
  const handleOnClick = () => {
    (0,_wordpress_abilities__WEBPACK_IMPORTED_MODULE_2__.executeAbility)('wp-ai/post-titles', {
      topic
    }).then(response => {
      setResult(response[0].split('\n').filter(Boolean));
    });
  };
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.Card, {
    style: {
      maxWidth: '650px'
    },
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.CardBody, {
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.__experimentalInputControl, {
        label: "Topic",
        placeholder: "e.g., Store that sells eco-friendly products",
        value: topic,
        onChange: value => setTopic(value),
        __next40pxDefaultSize: true
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.Button, {
        variant: "primary",
        onClick: handleOnClick,
        style: {
          marginTop: '16px'
        },
        children: "Suggest Titles"
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.CardBody, {
      children: result && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("ul", {
        children: result.map((title, index) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("li", {
          children: title
        }, index))
      })
    })]
  });
}

/***/ },

/***/ "./src/sections/SiteInfo.js"
/*!**********************************!*\
  !*** ./src/sections/SiteInfo.js ***!
  \**********************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ SiteInfo)
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_abilities__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/abilities */ "@wordpress/abilities");
/* harmony import */ var _wordpress_abilities__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_abilities__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__);




function SiteInfo() {
  const [siteInfo, setSiteInfo] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useState)(null);
  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    (0,_wordpress_abilities__WEBPACK_IMPORTED_MODULE_1__.executeAbility)('wp-ai/site-info').then(response => {
      setSiteInfo(response);
    });
  }, []);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Card, {
    style: {
      maxWidth: '650px'
    },
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.CardBody, {
      children: siteInfo && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("p", {
          children: ["Name: ", siteInfo.name]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("p", {
          children: ["Description: ", siteInfo.description]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("p", {
          children: ["URL: ", siteInfo.url]
        })]
      })
    })
  });
}

/***/ },

/***/ "./src/index.scss"
/*!************************!*\
  !*** ./src/index.scss ***!
  \************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ },

/***/ "./node_modules/wp-interface/build-module/components/App/index.js"
/*!************************************************************************!*\
  !*** ./node_modules/wp-interface/build-module/components/App/index.js ***!
  \************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   App: () => (/* binding */ App)
/* harmony export */ });
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ErrorBoundary__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../ErrorBoundary */ "./node_modules/wp-interface/build-module/components/ErrorBoundary/index.js");
/* harmony import */ var _Interface__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Interface */ "./node_modules/wp-interface/build-module/components/Interface/index.js");
/* harmony import */ var _InterfaceScopeProvider__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../InterfaceScopeProvider */ "./node_modules/wp-interface/build-module/components/InterfaceScopeProvider/index.js");
/* harmony import */ var _ShortcutsRegister__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../ShortcutsRegister */ "./node_modules/wp-interface/build-module/components/ShortcutsRegister/index.js");
/* harmony import */ var _KeyboardShortcutsHelpModal__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../KeyboardShortcutsHelpModal */ "./node_modules/wp-interface/build-module/components/KeyboardShortcutsHelpModal/index.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__);
// packages/wp-interface/src/components/App/index.tsx







function App(props) {
  const { scope, className, labels, shortcutsDescriptions, children } = props;
  const {
    keyboardShortcutsModalTitle,
    keyboardShortcutsModalCloseButtonLabel,
    keyboardShortcutsGlobalSectionTitle,
    ...interfaceLabels
  } = labels;
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.SlotFillProvider, { children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_ErrorBoundary__WEBPACK_IMPORTED_MODULE_1__.ErrorBoundary, { children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(_InterfaceScopeProvider__WEBPACK_IMPORTED_MODULE_3__.InterfaceScopeProvider, { scope, children: [
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(
      _Interface__WEBPACK_IMPORTED_MODULE_2__.Interface,
      {
        className,
        labels: interfaceLabels,
        children
      }
    ),
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_ShortcutsRegister__WEBPACK_IMPORTED_MODULE_4__.ShortcutsRegister, { descriptions: shortcutsDescriptions }),
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(
      _KeyboardShortcutsHelpModal__WEBPACK_IMPORTED_MODULE_5__.KeyboardShortcutsHelpModal,
      {
        labels: {
          modalTitle: keyboardShortcutsModalTitle,
          modalCloseButtonLabel: keyboardShortcutsModalCloseButtonLabel,
          globalSectionTitle: keyboardShortcutsGlobalSectionTitle
        }
      }
    )
  ] }) }) });
}

//# sourceMappingURL=index.js.map


/***/ },

/***/ "./node_modules/wp-interface/build-module/components/ErrorBoundary/index.js"
/*!**********************************************************************************!*\
  !*** ./node_modules/wp-interface/build-module/components/ErrorBoundary/index.js ***!
  \**********************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ErrorBoundary: () => (/* binding */ ErrorBoundary)
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/compose */ "@wordpress/compose");
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_compose__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_hooks__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/hooks */ "@wordpress/hooks");
/* harmony import */ var _wordpress_hooks__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_hooks__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__);
// packages/wp-interface/src/components/ErrorBoundary/index.tsx





function CopyButton(props) {
  const { text, children } = props;
  const ref = (0,_wordpress_compose__WEBPACK_IMPORTED_MODULE_2__.useCopyToClipboard)(text, () => {
  });
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Button, { size: "compact", variant: "secondary", ref, children });
}
var ErrorBoundary = class extends _wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Component {
  /**
   * Constructor.
   *
   * @param props - Component props.
   */
  constructor(props) {
    super(props);
    this.state = {
      error: null
    };
  }
  /**
   * Lifecycle method invoked after an error has been thrown by a descendant component.
   *
   * @param error - The error that was thrown.
   */
  componentDidCatch(error) {
    this.setState({ error });
    (0,_wordpress_hooks__WEBPACK_IMPORTED_MODULE_3__.doAction)("editor.ErrorBoundary.errorLogged", error);
  }
  /**
   * Renders the component.
   *
   * @returns The component to be rendered.
   */
  render() {
    const { error } = this.state;
    if (!error) {
      return this.props.children;
    }
    return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", { className: "wp-interface-error-boundary", children: [
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("p", { children: "The page has encountered an unexpected error." }),
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", { children: error.stack && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(CopyButton, { text: error.stack, children: "Copy error" }) })
    ] });
  }
};

//# sourceMappingURL=index.js.map


/***/ },

/***/ "./node_modules/wp-interface/build-module/components/Footer/index.js"
/*!***************************************************************************!*\
  !*** ./node_modules/wp-interface/build-module/components/Footer/index.js ***!
  \***************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Footer: () => (/* binding */ Footer),
/* harmony export */   useHasFooter: () => (/* binding */ useHasFooter)
/* harmony export */ });
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__);
// packages/wp-interface/src/components/Footer/index.tsx


var { Fill, Slot } = (0,_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.createSlotFill)("Footer");
function InternalFooter(props) {
  const { children } = props;
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(Fill, { children });
}
var Footer = Object.assign(InternalFooter, {
  displayName: "Footer",
  Slot: Object.assign(Slot, { displayName: "Footer.Slot" })
});
function useHasFooter() {
  const fills = (0,_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.__experimentalUseSlotFills)("Footer");
  return !!fills?.length;
}

//# sourceMappingURL=index.js.map


/***/ },

/***/ "./node_modules/wp-interface/build-module/components/Header/index.js"
/*!***************************************************************************!*\
  !*** ./node_modules/wp-interface/build-module/components/Header/index.js ***!
  \***************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Header: () => (/* binding */ Header),
/* harmony export */   useHasHeader: () => (/* binding */ useHasHeader)
/* harmony export */ });
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__);
// packages/wp-interface/src/components/Header/index.tsx


var { Fill, Slot } = (0,_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.createSlotFill)("Header");
function InternalHeader(props) {
  const { children } = props;
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(Fill, { children });
}
var Header = Object.assign(InternalHeader, {
  displayName: "Header",
  Slot: Object.assign(Slot, { displayName: "Header.Slot" })
});
function useHasHeader() {
  const fills = (0,_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.__experimentalUseSlotFills)("Header");
  return !!fills?.length;
}

//# sourceMappingURL=index.js.map


/***/ },

/***/ "./node_modules/wp-interface/build-module/components/HeaderActions/index.js"
/*!**********************************************************************************!*\
  !*** ./node_modules/wp-interface/build-module/components/HeaderActions/index.js ***!
  \**********************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   HeaderActions: () => (/* binding */ HeaderActions),
/* harmony export */   useHasHeaderActions: () => (/* binding */ useHasHeaderActions)
/* harmony export */ });
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__);
// packages/wp-interface/src/components/HeaderActions/index.tsx


var { Fill, Slot } = (0,_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.createSlotFill)("HeaderActions");
function InternalHeaderActions(props) {
  const { children } = props;
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(Fill, { children });
}
var HeaderActions = Object.assign(InternalHeaderActions, {
  displayName: "HeaderActions",
  Slot: Object.assign(Slot, { displayName: "HeaderActions.Slot" })
});
function useHasHeaderActions() {
  const fills = (0,_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.__experimentalUseSlotFills)("HeaderActions");
  return !!fills?.length;
}

//# sourceMappingURL=index.js.map


/***/ },

/***/ "./node_modules/wp-interface/build-module/components/Interface/index.js"
/*!******************************************************************************!*\
  !*** ./node_modules/wp-interface/build-module/components/Interface/index.js ***!
  \******************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Interface: () => (/* binding */ Interface)
/* harmony export */ });
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! clsx */ "./node_modules/clsx/dist/clsx.mjs");
/* harmony import */ var _wordpress_interface__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/interface */ "./node_modules/@wordpress/interface/build-module/index.js");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _wordpress_keyboard_shortcuts__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/keyboard-shortcuts */ "@wordpress/keyboard-shortcuts");
/* harmony import */ var _wordpress_keyboard_shortcuts__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_wordpress_keyboard_shortcuts__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @wordpress/compose */ "@wordpress/compose");
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_wordpress_compose__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../store */ "./node_modules/wp-interface/build-module/store/index.js");
/* harmony import */ var _Header__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../Header */ "./node_modules/wp-interface/build-module/components/Header/index.js");
/* harmony import */ var _HeaderActions__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../HeaderActions */ "./node_modules/wp-interface/build-module/components/HeaderActions/index.js");
/* harmony import */ var _Footer__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../Footer */ "./node_modules/wp-interface/build-module/components/Footer/index.js");
/* harmony import */ var _Sidebar__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../Sidebar */ "./node_modules/wp-interface/build-module/components/Sidebar/index.js");
/* harmony import */ var _Modal__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../Modal */ "./node_modules/wp-interface/build-module/components/Modal/index.js");
/* harmony import */ var _Notices__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../Notices */ "./node_modules/wp-interface/build-module/components/Notices/index.js");
/* harmony import */ var _Snackbars__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../Snackbars */ "./node_modules/wp-interface/build-module/components/Snackbars/index.js");
/* harmony import */ var _InterfaceScopeProvider__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../InterfaceScopeProvider */ "./node_modules/wp-interface/build-module/components/InterfaceScopeProvider/index.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__);
// packages/wp-interface/src/components/Interface/index.tsx

















function sanitizeNavigateRegions(navigatePreviousRegionShortcut, navigateNextRegionShortcut) {
  return {
    previous: navigatePreviousRegionShortcut.map((shortcut) => {
      return {
        character: shortcut.character,
        modifier: shortcut.modifier || "undefined"
      };
    }),
    next: navigateNextRegionShortcut.map((shortcut) => {
      return {
        character: shortcut.character,
        modifier: shortcut.modifier || "undefined"
      };
    })
  };
}
function Interface(props) {
  const { className, labels, children } = props;
  const scope = (0,_InterfaceScopeProvider__WEBPACK_IMPORTED_MODULE_15__.useInterfaceScope)();
  const isLargeViewport = (0,_wordpress_compose__WEBPACK_IMPORTED_MODULE_6__.useViewportMatch)("medium");
  const {
    isDistractionFree,
    navigatePreviousRegionShortcut,
    navigateNextRegionShortcut,
    activeSidebar,
    defaultSidebar
  } = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_2__.useSelect)((select) => {
    const { getAllShortcutKeyCombinations } = select(
      _wordpress_keyboard_shortcuts__WEBPACK_IMPORTED_MODULE_5__.store
    );
    const { getActiveSidebar, getDefaultSidebar, getPreference } = select(_store__WEBPACK_IMPORTED_MODULE_7__.store);
    return {
      isDistractionFree: !!getPreference(scope, "distractionFree"),
      navigatePreviousRegionShortcut: getAllShortcutKeyCombinations(
        `${scope}/previous-region`
      ),
      navigateNextRegionShortcut: getAllShortcutKeyCombinations(
        `${scope}/next-region`
      ),
      activeSidebar: getActiveSidebar(scope),
      defaultSidebar: getDefaultSidebar(scope)
    };
  }, []);
  const { setDefaultSidebar, toggleDefaultSidebar, togglePreference } = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_2__.useDispatch)(_store__WEBPACK_IMPORTED_MODULE_7__.store);
  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_3__.useEffect)(() => {
    if (activeSidebar && !defaultSidebar) {
      setDefaultSidebar(scope, activeSidebar);
    }
  }, [activeSidebar, defaultSidebar, setDefaultSidebar, scope]);
  (0,_wordpress_keyboard_shortcuts__WEBPACK_IMPORTED_MODULE_5__.useShortcut)(`${scope}/toggle-distraction-free`, () => {
    togglePreference(scope, "distractionFree");
  });
  (0,_wordpress_keyboard_shortcuts__WEBPACK_IMPORTED_MODULE_5__.useShortcut)(`${scope}/toggle-sidebar`, () => {
    toggleDefaultSidebar(scope);
  });
  const navigateRegionsInput = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_3__.useMemo)(
    () => sanitizeNavigateRegions(
      navigatePreviousRegionShortcut,
      navigateNextRegionShortcut
    ),
    [navigatePreviousRegionShortcut, navigateNextRegionShortcut]
  );
  const navigateRegionsProps = (0,_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.__unstableUseNavigateRegions)(navigateRegionsInput);
  const hasHeader = (0,_Header__WEBPACK_IMPORTED_MODULE_8__.useHasHeader)();
  const header = hasHeader && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsxs)("div", { className: "wp-interface-header", children: [
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)("div", { className: "wp-interface-header__left", children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)(_Header__WEBPACK_IMPORTED_MODULE_8__.Header.Slot, {}) }),
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)("div", { className: "wp-interface-header__right", children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)(_HeaderActions__WEBPACK_IMPORTED_MODULE_9__.HeaderActions.Slot, {}) })
  ] });
  const hasFooter = (0,_Footer__WEBPACK_IMPORTED_MODULE_10__.useHasFooter)();
  const footer = hasFooter && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)("div", { className: "wp-interface-footer", children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)(_Footer__WEBPACK_IMPORTED_MODULE_10__.Footer.Slot, {}) });
  const hasSidebar = (0,_Sidebar__WEBPACK_IMPORTED_MODULE_11__.useHasSidebar)();
  const sidebar = hasSidebar && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)(_Sidebar__WEBPACK_IMPORTED_MODULE_11__.Sidebar.Slot, {});
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)("div", { ...navigateRegionsProps, ref: navigateRegionsProps.ref, children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)(
    _wordpress_interface__WEBPACK_IMPORTED_MODULE_1__.InterfaceSkeleton,
    {
      isDistractionFree,
      className: (0,clsx__WEBPACK_IMPORTED_MODULE_0__["default"])("wp-interface-skeleton", className, {
        "is-distraction-free": isDistractionFree
      }),
      labels,
      header,
      content: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.Fragment, { children: [
        !isDistractionFree && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)(_Notices__WEBPACK_IMPORTED_MODULE_13__.Notices, {}),
        children,
        /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)(_Snackbars__WEBPACK_IMPORTED_MODULE_14__.Snackbars, {}),
        /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)(_Modal__WEBPACK_IMPORTED_MODULE_12__.Modal.Slot, {})
      ] }),
      editorNotices: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)(_Notices__WEBPACK_IMPORTED_MODULE_13__.Notices, {}),
      footer: !isDistractionFree && isLargeViewport && footer,
      secondarySidebar: void 0,
      sidebar: !isDistractionFree && sidebar,
      actions: void 0
    }
  ) });
}

//# sourceMappingURL=index.js.map


/***/ },

/***/ "./node_modules/wp-interface/build-module/components/InterfaceScopeProvider/index.js"
/*!*******************************************************************************************!*\
  !*** ./node_modules/wp-interface/build-module/components/InterfaceScopeProvider/index.js ***!
  \*******************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   InterfaceScopeProvider: () => (/* binding */ InterfaceScopeProvider),
/* harmony export */   useInterfaceScope: () => (/* binding */ useInterfaceScope)
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__);
// packages/wp-interface/src/components/InterfaceScopeProvider/index.tsx


var InterfaceScopeContext = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createContext)(void 0);
var { Provider } = InterfaceScopeContext;
function InterfaceScopeProvider(props) {
  const { scope, children } = props;
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(Provider, { value: scope, children });
}
function useInterfaceScope() {
  const context = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useContext)(InterfaceScopeContext);
  if (context === void 0) {
    throw new Error(
      "useInterfaceScope must be used within an InterfaceScopeProvider"
    );
  }
  return context;
}

//# sourceMappingURL=index.js.map


/***/ },

/***/ "./node_modules/wp-interface/build-module/components/KeyboardShortcutsHelpModal/index.js"
/*!***********************************************************************************************!*\
  !*** ./node_modules/wp-interface/build-module/components/KeyboardShortcutsHelpModal/index.js ***!
  \***********************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   KeyboardShortcutsHelpModal: () => (/* binding */ KeyboardShortcutsHelpModal)
/* harmony export */ });
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! clsx */ "./node_modules/clsx/dist/clsx.mjs");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_keyboard_shortcuts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/keyboard-shortcuts */ "@wordpress/keyboard-shortcuts");
/* harmony import */ var _wordpress_keyboard_shortcuts__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_keyboard_shortcuts__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_keycodes__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/keycodes */ "@wordpress/keycodes");
/* harmony import */ var _wordpress_keycodes__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_keycodes__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../store */ "./node_modules/wp-interface/build-module/store/index.js");
/* harmony import */ var _Modal__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../Modal */ "./node_modules/wp-interface/build-module/components/Modal/index.js");
/* harmony import */ var _InterfaceScopeProvider__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../InterfaceScopeProvider */ "./node_modules/wp-interface/build-module/components/InterfaceScopeProvider/index.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__);
// packages/wp-interface/src/components/KeyboardShortcutsHelpModal/index.tsx









var DEFAULT_LABELS = {
  modalTitle: "Keyboard shortcuts",
  modalCloseButtonLabel: "Close keyboard shortcuts modal",
  globalSectionTitle: "Global shortcuts"
};
function KeyCombination(props) {
  const { keyCombination } = props;
  const shortcut = keyCombination.modifier ? _wordpress_keycodes__WEBPACK_IMPORTED_MODULE_4__.displayShortcutList[keyCombination.modifier](
    keyCombination.character
  ) : keyCombination.character;
  const ariaLabel = keyCombination.modifier ? _wordpress_keycodes__WEBPACK_IMPORTED_MODULE_4__.shortcutAriaLabel[keyCombination.modifier](
    keyCombination.character
  ) : keyCombination.character;
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(
    "kbd",
    {
      className: "editor-keyboard-shortcut-help-modal__shortcut-key-combination",
      "aria-label": ariaLabel,
      children: (Array.isArray(shortcut) ? shortcut : [shortcut]).map(
        (character, index) => {
          if (character === "+") {
            return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.Fragment, { children: character }, index);
          }
          return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(
            "kbd",
            {
              className: "editor-keyboard-shortcut-help-modal__shortcut-key",
              children: character
            },
            index
          );
        }
      )
    }
  );
}
function Shortcut(props) {
  const { name } = props;
  const { keyCombination, description, aliases } = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_3__.useSelect)(
    (select) => {
      const {
        getShortcutKeyCombination,
        getShortcutDescription,
        getShortcutAliases
      } = select(_wordpress_keyboard_shortcuts__WEBPACK_IMPORTED_MODULE_2__.store);
      return {
        keyCombination: getShortcutKeyCombination(name),
        aliases: getShortcutAliases(name),
        description: getShortcutDescription(name)
      };
    },
    [name]
  );
  if (!keyCombination) {
    return null;
  }
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.Fragment, { children: [
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("div", { className: "editor-keyboard-shortcut-help-modal__shortcut-description", children: description }),
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("div", { className: "editor-keyboard-shortcut-help-modal__shortcut-term", children: [
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(KeyCombination, { keyCombination }),
      Array.isArray(aliases) && aliases.map((alias, index) => /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(
        KeyCombination,
        {
          keyCombination: alias
        },
        index
      ))
    ] })
  ] });
}
function ShortcutList(props) {
  const { shortcuts } = props;
  return (
    /*
     * Disable reason: The `list` ARIA role is redundant but
     * Safari+VoiceOver won't announce the list otherwise.
     */
    /* eslint-disable jsx-a11y/no-redundant-roles */
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(
      "ul",
      {
        className: "editor-keyboard-shortcut-help-modal__shortcut-list",
        role: "list",
        children: shortcuts.map((shortcut, index) => /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(
          "li",
          {
            className: "editor-keyboard-shortcut-help-modal__shortcut",
            children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(Shortcut, { name: shortcut })
          },
          index
        ))
      }
    )
  );
}
function ShortcutSection(props) {
  const { shortcuts, title, className } = props;
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)(
    "section",
    {
      className: (0,clsx__WEBPACK_IMPORTED_MODULE_0__["default"])(
        "editor-keyboard-shortcut-help-modal__section",
        className
      ),
      children: [
        !!title && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("h2", { className: "editor-keyboard-shortcut-help-modal__section-title", children: title }),
        /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(ShortcutList, { shortcuts })
      ]
    }
  );
}
function ShortcutCategorySection(props) {
  const { categoryName, title } = props;
  const categoryShortcuts = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_3__.useSelect)(
    (select) => {
      return select(_wordpress_keyboard_shortcuts__WEBPACK_IMPORTED_MODULE_2__.store).getCategoryShortcuts(
        categoryName
      );
    },
    [categoryName]
  );
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(ShortcutSection, { title, shortcuts: categoryShortcuts });
}
function KeyboardShortcutsHelpModal(props = {}) {
  const { labels } = props;
  const scope = (0,_InterfaceScopeProvider__WEBPACK_IMPORTED_MODULE_7__.useInterfaceScope)();
  const { toggleModal } = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_3__.useDispatch)(_store__WEBPACK_IMPORTED_MODULE_5__.store);
  (0,_wordpress_keyboard_shortcuts__WEBPACK_IMPORTED_MODULE_2__.useShortcut)(
    `${scope}/keyboard-shortcuts`,
    () => toggleModal(scope, "keyboard-shortcuts-help")
  );
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)(
    _Modal__WEBPACK_IMPORTED_MODULE_6__.Modal,
    {
      identifier: "keyboard-shortcuts-help",
      title: labels?.modalTitle ?? DEFAULT_LABELS.modalTitle,
      closeButtonLabel: labels?.modalCloseButtonLabel ?? DEFAULT_LABELS.modalCloseButtonLabel,
      className: "editor-keyboard-shortcut-help-modal",
      children: [
        /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(ShortcutCategorySection, { categoryName: "main" }),
        /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(
          ShortcutCategorySection,
          {
            title: labels?.globalSectionTitle ?? DEFAULT_LABELS.globalSectionTitle,
            categoryName: "global"
          }
        )
      ]
    }
  );
}

//# sourceMappingURL=index.js.map


/***/ },

/***/ "./node_modules/wp-interface/build-module/components/Modal/index.js"
/*!**************************************************************************!*\
  !*** ./node_modules/wp-interface/build-module/components/Modal/index.js ***!
  \**************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Modal: () => (/* binding */ Modal),
/* harmony export */   useHasModal: () => (/* binding */ useHasModal)
/* harmony export */ });
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../store */ "./node_modules/wp-interface/build-module/store/index.js");
/* harmony import */ var _InterfaceScopeProvider__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../InterfaceScopeProvider */ "./node_modules/wp-interface/build-module/components/InterfaceScopeProvider/index.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__);
// packages/wp-interface/src/components/Modal/index.tsx





var { Fill, Slot } = (0,_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.createSlotFill)("Modal");
function InternalModal(props) {
  const {
    identifier,
    title,
    children,
    closeButtonLabel,
    ...additionalProps
  } = props;
  const scope = (0,_InterfaceScopeProvider__WEBPACK_IMPORTED_MODULE_3__.useInterfaceScope)();
  const isModalActive = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_1__.useSelect)(
    (select) => select(_store__WEBPACK_IMPORTED_MODULE_2__.store).isModalActive(scope, identifier),
    [identifier, scope]
  );
  const { closeModal } = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_1__.useDispatch)(_store__WEBPACK_IMPORTED_MODULE_2__.store);
  if (!isModalActive) {
    return null;
  }
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(Fill, { children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(
    _wordpress_components__WEBPACK_IMPORTED_MODULE_0__.Modal,
    {
      title,
      closeButtonLabel: closeButtonLabel ?? "Close modal",
      onRequestClose: closeModal,
      ...additionalProps,
      children
    }
  ) });
}
var Modal = Object.assign(InternalModal, {
  displayName: "Modal",
  Slot: Object.assign(Slot, { displayName: "Modal.Slot" })
});
function useHasModal() {
  const fills = (0,_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.__experimentalUseSlotFills)("Modal");
  return !!fills?.length;
}

//# sourceMappingURL=index.js.map


/***/ },

/***/ "./node_modules/wp-interface/build-module/components/MoreMenu/DistractionFreePreferenceToggleMenuItem/index.js"
/*!*********************************************************************************************************************!*\
  !*** ./node_modules/wp-interface/build-module/components/MoreMenu/DistractionFreePreferenceToggleMenuItem/index.js ***!
  \*********************************************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DistractionFreePreferenceToggleMenuItem: () => (/* binding */ DistractionFreePreferenceToggleMenuItem)
/* harmony export */ });
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_preferences__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/preferences */ "@wordpress/preferences");
/* harmony import */ var _wordpress_preferences__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_preferences__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_keyboard_shortcuts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/keyboard-shortcuts */ "@wordpress/keyboard-shortcuts");
/* harmony import */ var _wordpress_keyboard_shortcuts__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_keyboard_shortcuts__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _InterfaceScopeProvider__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../InterfaceScopeProvider */ "./node_modules/wp-interface/build-module/components/InterfaceScopeProvider/index.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__);
// packages/wp-interface/src/components/MoreMenu/DistractionFreePreferenceToggleMenuItem/index.tsx





var DEFAULT_LABELS = {
  menuItemLabel: "Distraction free",
  menuItemInfo: "Hide secondary interface to help focus",
  messageActivated: "Distraction free mode activated",
  messageDeactivated: "Distraction free mode deactivated"
};
function DistractionFreePreferenceToggleMenuItem(props = {}) {
  const {
    menuItemLabel,
    menuItemInfo,
    messageActivated,
    messageDeactivated
  } = props;
  const scope = (0,_InterfaceScopeProvider__WEBPACK_IMPORTED_MODULE_3__.useInterfaceScope)();
  const shortcut = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_0__.useSelect)(
    (select) => select(_wordpress_keyboard_shortcuts__WEBPACK_IMPORTED_MODULE_2__.store).getShortcutRepresentation(
      `${scope}/toggle-distraction-free`,
      "display"
    ),
    [scope]
  );
  if (!shortcut) {
    return null;
  }
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(
    _wordpress_preferences__WEBPACK_IMPORTED_MODULE_1__.PreferenceToggleMenuItem,
    {
      scope,
      name: "distractionFree",
      label: menuItemLabel ?? DEFAULT_LABELS.menuItemLabel,
      info: menuItemInfo ?? DEFAULT_LABELS.menuItemInfo,
      messageActivated: messageActivated ?? DEFAULT_LABELS.messageActivated,
      messageDeactivated: messageDeactivated ?? DEFAULT_LABELS.messageDeactivated,
      shortcut
    }
  );
}

//# sourceMappingURL=index.js.map


/***/ },

/***/ "./node_modules/wp-interface/build-module/components/MoreMenu/KeyboardShortcutsMenuItem/index.js"
/*!*******************************************************************************************************!*\
  !*** ./node_modules/wp-interface/build-module/components/MoreMenu/KeyboardShortcutsMenuItem/index.js ***!
  \*******************************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   KeyboardShortcutsMenuItem: () => (/* binding */ KeyboardShortcutsMenuItem)
/* harmony export */ });
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_keyboard_shortcuts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/keyboard-shortcuts */ "@wordpress/keyboard-shortcuts");
/* harmony import */ var _wordpress_keyboard_shortcuts__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_keyboard_shortcuts__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../store */ "./node_modules/wp-interface/build-module/store/index.js");
/* harmony import */ var _InterfaceScopeProvider__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../InterfaceScopeProvider */ "./node_modules/wp-interface/build-module/components/InterfaceScopeProvider/index.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__);
// packages/wp-interface/src/components/MoreMenu/KeyboardShortcutsMenuItem/index.tsx






var DEFAULT_LABELS = {
  menuItemLabel: "Keyboard shortcuts"
};
function KeyboardShortcutsMenuItem(props = {}) {
  const { menuItemLabel } = props;
  const scope = (0,_InterfaceScopeProvider__WEBPACK_IMPORTED_MODULE_4__.useInterfaceScope)();
  const { openModal } = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_1__.useDispatch)(_store__WEBPACK_IMPORTED_MODULE_3__.store);
  const shortcut = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_1__.useSelect)(
    (select) => select(_wordpress_keyboard_shortcuts__WEBPACK_IMPORTED_MODULE_2__.store).getShortcutRepresentation(
      `${scope}/keyboard-shortcuts`,
      "display"
    ),
    [scope]
  );
  if (!shortcut) {
    return null;
  }
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(
    _wordpress_components__WEBPACK_IMPORTED_MODULE_0__.MenuItem,
    {
      onClick: () => openModal(scope, "keyboard-shortcuts-help"),
      shortcut,
      children: menuItemLabel ?? DEFAULT_LABELS.menuItemLabel
    }
  );
}

//# sourceMappingURL=index.js.map


/***/ },

/***/ "./node_modules/wp-interface/build-module/components/MoreMenu/index.js"
/*!*****************************************************************************!*\
  !*** ./node_modules/wp-interface/build-module/components/MoreMenu/index.js ***!
  \*****************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MoreMenu: () => (/* binding */ MoreMenu)
/* harmony export */ });
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_icons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/icons */ "./node_modules/@wordpress/icons/build-module/library/external.mjs");
/* harmony import */ var _wordpress_icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/icons */ "./node_modules/@wordpress/icons/build-module/library/more-vertical.mjs");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _wordpress_preferences__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/preferences */ "@wordpress/preferences");
/* harmony import */ var _wordpress_preferences__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_wordpress_preferences__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _InterfaceScopeProvider__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../InterfaceScopeProvider */ "./node_modules/wp-interface/build-module/components/InterfaceScopeProvider/index.js");
/* harmony import */ var _DistractionFreePreferenceToggleMenuItem__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./DistractionFreePreferenceToggleMenuItem */ "./node_modules/wp-interface/build-module/components/MoreMenu/DistractionFreePreferenceToggleMenuItem/index.js");
/* harmony import */ var _KeyboardShortcutsMenuItem__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./KeyboardShortcutsMenuItem */ "./node_modules/wp-interface/build-module/components/MoreMenu/KeyboardShortcutsMenuItem/index.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__);
// packages/wp-interface/src/components/MoreMenu/index.tsx









var ExternalLinkA11yTextContext = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_4__.createContext)(
  "(opens in a new tab)"
);
var { Provider: ExternalLinkA11yTextProvider } = ExternalLinkA11yTextContext;
function InternalLinkMenuItem(props) {
  const { href, children } = props;
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(
    _wordpress_components__WEBPACK_IMPORTED_MODULE_3__.MenuItem,
    {
      href,
      children
    }
  );
}
function ExternalLinkMenuItem(props) {
  const { href, children } = props;
  const externalLinkA11yHint = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_4__.useContext)(ExternalLinkA11yTextContext);
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)(
    _wordpress_components__WEBPACK_IMPORTED_MODULE_3__.MenuItem,
    {
      icon: _wordpress_icons__WEBPACK_IMPORTED_MODULE_1__["default"],
      href,
      target: "_blank",
      rel: "noopener noreferrer",
      children: [
        children,
        /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.VisuallyHidden, { as: "span", children: externalLinkA11yHint })
      ]
    }
  );
}
function InternalMoreMenu(props) {
  const { menuLabel, externalLinkA11yHint, children } = props;
  const scope = (0,_InterfaceScopeProvider__WEBPACK_IMPORTED_MODULE_6__.useInterfaceScope)();
  const showIconLabels = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_0__.useSelect)(
    (select) => select(_wordpress_preferences__WEBPACK_IMPORTED_MODULE_5__.store).get(scope, "showIconLabels"),
    []
  );
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(
    ExternalLinkA11yTextProvider,
    {
      value: externalLinkA11yHint || "(opens in a new tab)",
      children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(
        _wordpress_components__WEBPACK_IMPORTED_MODULE_3__.DropdownMenu,
        {
          icon: _wordpress_icons__WEBPACK_IMPORTED_MODULE_2__["default"],
          label: menuLabel || "Options",
          popoverProps: {
            placement: "bottom-end",
            className: "more-menu-dropdown__content"
          },
          toggleProps: {
            showTooltip: !showIconLabels,
            ...showIconLabels ? { variant: "tertiary" } : {},
            tooltipPosition: "bottom",
            size: "compact"
          },
          children
        }
      )
    }
  );
}
var MoreMenu = Object.assign(InternalMoreMenu, {
  displayName: "MoreMenu",
  MenuGroup: _wordpress_components__WEBPACK_IMPORTED_MODULE_3__.MenuGroup,
  MenuItem: _wordpress_components__WEBPACK_IMPORTED_MODULE_3__.MenuItem,
  DistractionFreePreferenceToggleMenuItem: _DistractionFreePreferenceToggleMenuItem__WEBPACK_IMPORTED_MODULE_7__.DistractionFreePreferenceToggleMenuItem,
  KeyboardShortcutsMenuItem: _KeyboardShortcutsMenuItem__WEBPACK_IMPORTED_MODULE_8__.KeyboardShortcutsMenuItem,
  InternalLinkMenuItem,
  ExternalLinkMenuItem
});

//# sourceMappingURL=index.js.map


/***/ },

/***/ "./node_modules/wp-interface/build-module/components/Notices/index.js"
/*!****************************************************************************!*\
  !*** ./node_modules/wp-interface/build-module/components/Notices/index.js ***!
  \****************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Notices: () => (/* binding */ Notices)
/* harmony export */ });
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_notices__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/notices */ "@wordpress/notices");
/* harmony import */ var _wordpress_notices__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_notices__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__);
// packages/wp-interface/src/components/Notices/index.tsx





function prepareNoticeForNoticeProps(notice) {
  const { __unstableHTML, ...restProps } = notice;
  return {
    ...restProps,
    // Convert string to the  union type of actual status strings.
    status: notice.status,
    // Convert incompatible action type to only allow `url` _or_ `onClick`.
    actions: notice.actions.map((action) => {
      if (action.url) {
        return {
          label: action.label,
          url: action.url
        };
      }
      if (action.onClick) {
        return {
          label: action.label,
          onClick: action.onClick
        };
      }
      return {
        label: action.label,
        url: ""
      };
    }).filter((action) => action.url || action.onClick)
  };
}
function Notices() {
  const { notices } = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_1__.useSelect)(
    (select) => ({
      notices: select(_wordpress_notices__WEBPACK_IMPORTED_MODULE_3__.store).getNotices()
    }),
    []
  );
  const { removeNotice } = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_1__.useDispatch)(_wordpress_notices__WEBPACK_IMPORTED_MODULE_3__.store);
  const { dismissibleNotices, nonDismissibleNotices } = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_2__.useMemo)(() => {
    return {
      dismissibleNotices: notices.filter(
        ({ isDismissible, type }) => isDismissible && type === "default"
      ).map(prepareNoticeForNoticeProps),
      nonDismissibleNotices: notices.filter(
        ({ isDismissible, type }) => !isDismissible && type === "default"
      ).map(prepareNoticeForNoticeProps)
    };
  }, [notices]);
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.Fragment, { children: [
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(
      _wordpress_components__WEBPACK_IMPORTED_MODULE_0__.NoticeList,
      {
        notices: nonDismissibleNotices,
        className: "wp-interface-notices__pinned"
      }
    ),
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(
      _wordpress_components__WEBPACK_IMPORTED_MODULE_0__.NoticeList,
      {
        notices: dismissibleNotices,
        className: "wp-interface-notices__dismissible",
        onRemove: removeNotice
      }
    )
  ] });
}

//# sourceMappingURL=index.js.map


/***/ },

/***/ "./node_modules/wp-interface/build-module/components/PinnedSidebars/index.js"
/*!***********************************************************************************!*\
  !*** ./node_modules/wp-interface/build-module/components/PinnedSidebars/index.js ***!
  \***********************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PinnedSidebars: () => (/* binding */ PinnedSidebars)
/* harmony export */ });
/* harmony import */ var _wordpress_interface__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/interface */ "./node_modules/@wordpress/interface/build-module/index.js");
/* harmony import */ var _InterfaceScopeProvider__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../InterfaceScopeProvider */ "./node_modules/wp-interface/build-module/components/InterfaceScopeProvider/index.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__);
// packages/wp-interface/src/components/PinnedSidebars/index.tsx



function PinnedSidebars() {
  const scope = (0,_InterfaceScopeProvider__WEBPACK_IMPORTED_MODULE_1__.useInterfaceScope)();
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_wordpress_interface__WEBPACK_IMPORTED_MODULE_0__.PinnedItems.Slot, { scope });
}

//# sourceMappingURL=index.js.map


/***/ },

/***/ "./node_modules/wp-interface/build-module/components/ShortcutsRegister/index.js"
/*!**************************************************************************************!*\
  !*** ./node_modules/wp-interface/build-module/components/ShortcutsRegister/index.js ***!
  \**************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ShortcutsRegister: () => (/* binding */ ShortcutsRegister)
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_keyboard_shortcuts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/keyboard-shortcuts */ "@wordpress/keyboard-shortcuts");
/* harmony import */ var _wordpress_keyboard_shortcuts__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_keyboard_shortcuts__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _InterfaceScopeProvider__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../InterfaceScopeProvider */ "./node_modules/wp-interface/build-module/components/InterfaceScopeProvider/index.js");
/* harmony import */ var _Sidebar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Sidebar */ "./node_modules/wp-interface/build-module/components/Sidebar/index.js");
// packages/wp-interface/src/components/ShortcutsRegister/index.tsx





var EMPTY_DESCRIPTIONS = {};
var DEFAULT_DESCRIPTIONS = {
  "keyboard-shortcuts": "Display these keyboard shortcuts.",
  "next-region": "Navigate to the next part of the screen.",
  "previous-region": "Navigate to the previous part of the screen.",
  "toggle-distraction-free": "Toggle distraction free mode.",
  "toggle-sidebar": "Show or hide the sidebar."
};
var getDescription = (shortcutName, descriptions) => {
  return descriptions[shortcutName] || DEFAULT_DESCRIPTIONS[shortcutName] || "";
};
function ShortcutsRegister(props) {
  const { descriptions = EMPTY_DESCRIPTIONS } = props;
  const scope = (0,_InterfaceScopeProvider__WEBPACK_IMPORTED_MODULE_3__.useInterfaceScope)();
  const hasSidebar = (0,_Sidebar__WEBPACK_IMPORTED_MODULE_4__.useHasSidebar)();
  const { registerShortcut } = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_1__.useDispatch)(_wordpress_keyboard_shortcuts__WEBPACK_IMPORTED_MODULE_2__.store);
  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    registerShortcut({
      name: `${scope}/keyboard-shortcuts`,
      category: "main",
      description: getDescription("keyboard-shortcuts", descriptions),
      keyCombination: {
        modifier: "access",
        character: "h"
      }
    });
    registerShortcut({
      name: `${scope}/next-region`,
      category: "global",
      description: getDescription("next-region", descriptions),
      keyCombination: {
        modifier: "ctrl",
        character: "`"
      },
      aliases: [
        {
          modifier: "access",
          character: "n"
        }
      ]
    });
    registerShortcut({
      name: `${scope}/previous-region`,
      category: "global",
      description: getDescription("previous-region", descriptions),
      keyCombination: {
        modifier: "ctrlShift",
        character: "`"
      },
      aliases: [
        {
          modifier: "access",
          character: "p"
        },
        {
          modifier: "ctrlShift",
          character: "~"
        }
      ]
    });
    registerShortcut({
      name: `${scope}/toggle-distraction-free`,
      category: "global",
      description: getDescription(
        "toggle-distraction-free",
        descriptions
      ),
      keyCombination: {
        modifier: "primaryShift",
        character: "\\"
      }
    });
    if (hasSidebar) {
      registerShortcut({
        name: `${scope}/toggle-sidebar`,
        category: "global",
        description: getDescription("toggle-sidebar", descriptions),
        keyCombination: {
          modifier: "primaryShift",
          character: ","
        }
      });
    }
  }, [registerShortcut, descriptions, scope, hasSidebar]);
  return null;
}

//# sourceMappingURL=index.js.map


/***/ },

/***/ "./node_modules/wp-interface/build-module/components/Sidebar/index.js"
/*!****************************************************************************!*\
  !*** ./node_modules/wp-interface/build-module/components/Sidebar/index.js ***!
  \****************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Sidebar: () => (/* binding */ Sidebar),
/* harmony export */   useHasSidebar: () => (/* binding */ useHasSidebar)
/* harmony export */ });
/* harmony import */ var _wordpress_interface__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/interface */ "./node_modules/@wordpress/interface/build-module/index.js");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_keyboard_shortcuts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/keyboard-shortcuts */ "@wordpress/keyboard-shortcuts");
/* harmony import */ var _wordpress_keyboard_shortcuts__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_keyboard_shortcuts__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _InterfaceScopeProvider__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../InterfaceScopeProvider */ "./node_modules/wp-interface/build-module/components/InterfaceScopeProvider/index.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__);
// packages/wp-interface/src/components/Sidebar/index.tsx






function InternalSidebar(props) {
  const {
    identifier,
    title,
    icon,
    header,
    isPinnable,
    isActiveByDefault,
    children,
    closeButtonLabel
  } = props;
  const scope = (0,_InterfaceScopeProvider__WEBPACK_IMPORTED_MODULE_4__.useInterfaceScope)();
  const shortcut = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_2__.useSelect)(
    (select) => select(_wordpress_keyboard_shortcuts__WEBPACK_IMPORTED_MODULE_3__.store).getShortcutRepresentation(
      `${scope}/toggle-sidebar`,
      "display"
    ),
    [scope]
  );
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(
    _wordpress_interface__WEBPACK_IMPORTED_MODULE_0__.ComplementaryArea,
    {
      scope,
      identifier,
      title,
      icon,
      header,
      isPinnable,
      isActiveByDefault,
      toggleShortcut: shortcut ?? void 0,
      closeLabel: closeButtonLabel ?? "Close sidebar",
      children
    }
  );
}
var InternalSidebarSlot = () => {
  const scope = (0,_InterfaceScopeProvider__WEBPACK_IMPORTED_MODULE_4__.useInterfaceScope)();
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_interface__WEBPACK_IMPORTED_MODULE_0__.ComplementaryArea.Slot, { scope });
};
var Sidebar = Object.assign(InternalSidebar, {
  displayName: "Sidebar",
  Slot: Object.assign(InternalSidebarSlot, { displayName: "Sidebar.Slot" })
});
function useHasSidebar() {
  const scope = (0,_InterfaceScopeProvider__WEBPACK_IMPORTED_MODULE_4__.useInterfaceScope)();
  const fills = (0,_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.__experimentalUseSlotFills)(`ComplementaryArea/${scope}`);
  return !!fills?.length;
}

//# sourceMappingURL=index.js.map


/***/ },

/***/ "./node_modules/wp-interface/build-module/components/Snackbars/index.js"
/*!******************************************************************************!*\
  !*** ./node_modules/wp-interface/build-module/components/Snackbars/index.js ***!
  \******************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Snackbars: () => (/* binding */ Snackbars)
/* harmony export */ });
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_notices__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/notices */ "@wordpress/notices");
/* harmony import */ var _wordpress_notices__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_notices__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__);
// packages/wp-interface/src/components/Snackbars/index.tsx





function prepareNoticeForSnackbarProps(notice) {
  return {
    ...notice,
    // Convert incompatible action type to only allow `url` _or_ `onClick`.
    actions: notice.actions.map((action) => {
      if (action.url) {
        return {
          label: action.label,
          url: action.url
        };
      }
      if (action.onClick) {
        return {
          label: action.label,
          onClick: action.onClick
        };
      }
      return {
        label: action.label,
        url: ""
      };
    }).filter((action) => action.url || action.onClick)
  };
}
var MAX_VISIBLE_NOTICES = -3;
function Snackbars() {
  const notices = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_1__.useSelect)(
    (select) => select(_wordpress_notices__WEBPACK_IMPORTED_MODULE_3__.store).getNotices(),
    []
  );
  const { removeNotice } = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_1__.useDispatch)(_wordpress_notices__WEBPACK_IMPORTED_MODULE_3__.store);
  const snackbarNotices = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_2__.useMemo)(() => {
    return notices.filter(({ type }) => type === "snackbar").map(prepareNoticeForSnackbarProps).slice(MAX_VISIBLE_NOTICES);
  }, [notices]);
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(
    _wordpress_components__WEBPACK_IMPORTED_MODULE_0__.SnackbarList,
    {
      notices: snackbarNotices,
      className: "wp-interface-notices__snackbar",
      onRemove: removeNotice
    }
  );
}

//# sourceMappingURL=index.js.map


/***/ },

/***/ "./node_modules/wp-interface/build-module/components/index.js"
/*!********************************************************************!*\
  !*** ./node_modules/wp-interface/build-module/components/index.js ***!
  \********************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   App: () => (/* reexport safe */ _App__WEBPACK_IMPORTED_MODULE_0__.App),
/* harmony export */   ErrorBoundary: () => (/* reexport safe */ _ErrorBoundary__WEBPACK_IMPORTED_MODULE_1__.ErrorBoundary),
/* harmony export */   Footer: () => (/* reexport safe */ _Footer__WEBPACK_IMPORTED_MODULE_2__.Footer),
/* harmony export */   Header: () => (/* reexport safe */ _Header__WEBPACK_IMPORTED_MODULE_3__.Header),
/* harmony export */   HeaderActions: () => (/* reexport safe */ _HeaderActions__WEBPACK_IMPORTED_MODULE_4__.HeaderActions),
/* harmony export */   Interface: () => (/* reexport safe */ _Interface__WEBPACK_IMPORTED_MODULE_5__.Interface),
/* harmony export */   InterfaceScopeProvider: () => (/* reexport safe */ _InterfaceScopeProvider__WEBPACK_IMPORTED_MODULE_6__.InterfaceScopeProvider),
/* harmony export */   Modal: () => (/* reexport safe */ _Modal__WEBPACK_IMPORTED_MODULE_9__.Modal),
/* harmony export */   MoreMenu: () => (/* reexport safe */ _MoreMenu__WEBPACK_IMPORTED_MODULE_10__.MoreMenu),
/* harmony export */   PinnedSidebars: () => (/* reexport safe */ _PinnedSidebars__WEBPACK_IMPORTED_MODULE_7__.PinnedSidebars),
/* harmony export */   Sidebar: () => (/* reexport safe */ _Sidebar__WEBPACK_IMPORTED_MODULE_8__.Sidebar),
/* harmony export */   useInterfaceScope: () => (/* reexport safe */ _InterfaceScopeProvider__WEBPACK_IMPORTED_MODULE_6__.useInterfaceScope)
/* harmony export */ });
/* harmony import */ var _App__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./App */ "./node_modules/wp-interface/build-module/components/App/index.js");
/* harmony import */ var _ErrorBoundary__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ErrorBoundary */ "./node_modules/wp-interface/build-module/components/ErrorBoundary/index.js");
/* harmony import */ var _Footer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Footer */ "./node_modules/wp-interface/build-module/components/Footer/index.js");
/* harmony import */ var _Header__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Header */ "./node_modules/wp-interface/build-module/components/Header/index.js");
/* harmony import */ var _HeaderActions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./HeaderActions */ "./node_modules/wp-interface/build-module/components/HeaderActions/index.js");
/* harmony import */ var _Interface__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Interface */ "./node_modules/wp-interface/build-module/components/Interface/index.js");
/* harmony import */ var _InterfaceScopeProvider__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./InterfaceScopeProvider */ "./node_modules/wp-interface/build-module/components/InterfaceScopeProvider/index.js");
/* harmony import */ var _PinnedSidebars__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./PinnedSidebars */ "./node_modules/wp-interface/build-module/components/PinnedSidebars/index.js");
/* harmony import */ var _Sidebar__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./Sidebar */ "./node_modules/wp-interface/build-module/components/Sidebar/index.js");
/* harmony import */ var _Modal__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./Modal */ "./node_modules/wp-interface/build-module/components/Modal/index.js");
/* harmony import */ var _MoreMenu__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./MoreMenu */ "./node_modules/wp-interface/build-module/components/MoreMenu/index.js");
// packages/wp-interface/src/components/index.ts












//# sourceMappingURL=index.js.map


/***/ },

/***/ "./node_modules/wp-interface/build-module/index.js"
/*!*********************************************************!*\
  !*** ./node_modules/wp-interface/build-module/index.js ***!
  \*********************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   App: () => (/* reexport safe */ _components__WEBPACK_IMPORTED_MODULE_0__.App),
/* harmony export */   ErrorBoundary: () => (/* reexport safe */ _components__WEBPACK_IMPORTED_MODULE_0__.ErrorBoundary),
/* harmony export */   Footer: () => (/* reexport safe */ _components__WEBPACK_IMPORTED_MODULE_0__.Footer),
/* harmony export */   Header: () => (/* reexport safe */ _components__WEBPACK_IMPORTED_MODULE_0__.Header),
/* harmony export */   HeaderActions: () => (/* reexport safe */ _components__WEBPACK_IMPORTED_MODULE_0__.HeaderActions),
/* harmony export */   Interface: () => (/* reexport safe */ _components__WEBPACK_IMPORTED_MODULE_0__.Interface),
/* harmony export */   InterfaceScopeProvider: () => (/* reexport safe */ _components__WEBPACK_IMPORTED_MODULE_0__.InterfaceScopeProvider),
/* harmony export */   Modal: () => (/* reexport safe */ _components__WEBPACK_IMPORTED_MODULE_0__.Modal),
/* harmony export */   MoreMenu: () => (/* reexport safe */ _components__WEBPACK_IMPORTED_MODULE_0__.MoreMenu),
/* harmony export */   PinnedSidebars: () => (/* reexport safe */ _components__WEBPACK_IMPORTED_MODULE_0__.PinnedSidebars),
/* harmony export */   Sidebar: () => (/* reexport safe */ _components__WEBPACK_IMPORTED_MODULE_0__.Sidebar),
/* harmony export */   store: () => (/* reexport safe */ _store__WEBPACK_IMPORTED_MODULE_1__.store),
/* harmony export */   useInterfaceScope: () => (/* reexport safe */ _components__WEBPACK_IMPORTED_MODULE_0__.useInterfaceScope)
/* harmony export */ });
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components */ "./node_modules/wp-interface/build-module/components/index.js");
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./store */ "./node_modules/wp-interface/build-module/store/index.js");
// packages/wp-interface/src/index.ts


//# sourceMappingURL=index.js.map


/***/ },

/***/ "./node_modules/wp-interface/build-module/store/index.js"
/*!***************************************************************!*\
  !*** ./node_modules/wp-interface/build-module/store/index.js ***!
  \***************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   store: () => (/* binding */ store)
/* harmony export */ });
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var wp_store_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! wp-store-utils */ "./node_modules/wp-store-utils/build-module/index.js");
/* harmony import */ var _name__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./name */ "./node_modules/wp-interface/build-module/store/name.js");
/* harmony import */ var _sidebar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./sidebar */ "./node_modules/wp-interface/build-module/store/sidebar.js");
/* harmony import */ var _modal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modal */ "./node_modules/wp-interface/build-module/store/modal.js");
/* harmony import */ var _panel__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./panel */ "./node_modules/wp-interface/build-module/store/panel.js");
/* harmony import */ var _preferences__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./preferences */ "./node_modules/wp-interface/build-module/store/preferences.js");
// packages/wp-interface/src/store/index.ts







var storeConfig = (0,wp_store_utils__WEBPACK_IMPORTED_MODULE_1__.combineStoreConfigs)(
  _sidebar__WEBPACK_IMPORTED_MODULE_3__.storeConfig,
  _modal__WEBPACK_IMPORTED_MODULE_4__.storeConfig,
  _panel__WEBPACK_IMPORTED_MODULE_5__.storeConfig,
  _preferences__WEBPACK_IMPORTED_MODULE_6__.storeConfig
);
var store = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_0__.createReduxStore)(_name__WEBPACK_IMPORTED_MODULE_2__.STORE_NAME, storeConfig);
(0,_wordpress_data__WEBPACK_IMPORTED_MODULE_0__.register)(store);

//# sourceMappingURL=index.js.map


/***/ },

/***/ "./node_modules/wp-interface/build-module/store/modal.js"
/*!***************************************************************!*\
  !*** ./node_modules/wp-interface/build-module/store/modal.js ***!
  \***************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ActionType: () => (/* binding */ ActionType),
/* harmony export */   storeConfig: () => (/* binding */ storeConfig)
/* harmony export */ });
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_interface__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/interface */ "./node_modules/@wordpress/interface/build-module/index.js");
// packages/wp-interface/src/store/modal.ts


var ActionType = /* @__PURE__ */ ((ActionType2) => {
  ActionType2["Unknown"] = "REDUX_UNKNOWN";
  return ActionType2;
})(ActionType || {});
var actions = {
  /**
   * Opens a modal.
   *
   * @param scope - Modal scope.
   * @param modalId - Modal identifier.
   * @returns Action creator.
   */
  openModal(scope, modalId) {
    return ({ registry }) => {
      registry.dispatch(_wordpress_interface__WEBPACK_IMPORTED_MODULE_1__.store).openModal(`${scope}/${modalId}`);
    };
  },
  /**
   * Closes the currently open modal.
   *
   * @returns Action creator.
   */
  closeModal() {
    return ({ registry }) => {
      registry.dispatch(_wordpress_interface__WEBPACK_IMPORTED_MODULE_1__.store).closeModal();
    };
  },
  /**
   * Toggles a modal.
   *
   * If the modal is active, it will be closed.
   * If the modal is closed or another modal is active, it will be opened.
   *
   * @param scope - Modal scope.
   * @param modalId - Modal identifier.
   * @returns Action creator.
   */
  toggleModal(scope, modalId) {
    return ({ dispatch, select }) => {
      if (select.isModalActive(scope, modalId)) {
        dispatch.closeModal();
      } else {
        dispatch.openModal(scope, modalId);
      }
    };
  }
};
var selectors = {
  isModalActive: (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_0__.createRegistrySelector)(
    (select) => (_state, scope, modalId) => {
      return select(_wordpress_interface__WEBPACK_IMPORTED_MODULE_1__.store).isModalActive(
        `${scope}/${modalId}`
      );
    }
  )
};
var storeConfig = {
  actions,
  reducer: (state) => state,
  // Empty reducer.
  selectors
};

//# sourceMappingURL=modal.js.map


/***/ },

/***/ "./node_modules/wp-interface/build-module/store/name.js"
/*!**************************************************************!*\
  !*** ./node_modules/wp-interface/build-module/store/name.js ***!
  \**************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   STORE_NAME: () => (/* binding */ STORE_NAME)
/* harmony export */ });
// packages/wp-interface/src/store/name.ts
var STORE_NAME = "wp-interface";

//# sourceMappingURL=name.js.map


/***/ },

/***/ "./node_modules/wp-interface/build-module/store/panel.js"
/*!***************************************************************!*\
  !*** ./node_modules/wp-interface/build-module/store/panel.js ***!
  \***************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ActionType: () => (/* binding */ ActionType),
/* harmony export */   storeConfig: () => (/* binding */ storeConfig)
/* harmony export */ });
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_preferences__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/preferences */ "@wordpress/preferences");
/* harmony import */ var _wordpress_preferences__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_preferences__WEBPACK_IMPORTED_MODULE_1__);
// packages/wp-interface/src/store/panel.ts


var ActionType = /* @__PURE__ */ ((ActionType2) => {
  ActionType2["Unknown"] = "REDUX_UNKNOWN";
  return ActionType2;
})(ActionType || {});
var actions = {
  /**
   * Opens a panel.
   *
   * @param scope - Scope identifier.
   * @param panelId - Panel identifier.
   * @returns Action creator.
   */
  openPanel(scope, panelId) {
    return ({ registry }) => {
      const activePanels = registry.select(_wordpress_preferences__WEBPACK_IMPORTED_MODULE_1__.store).get(scope, "activePanels") ?? [];
      if (activePanels.includes(panelId)) {
        return;
      }
      registry.dispatch(_wordpress_preferences__WEBPACK_IMPORTED_MODULE_1__.store).set(scope, "activePanels", [...activePanels, panelId]);
    };
  },
  /**
   * Closes a panel.
   *
   * @param scope - Scope identifier.
   * @param panelId - Panel identifier.
   * @returns Action creator.
   */
  closePanel(scope, panelId) {
    return ({ registry }) => {
      const activePanels = registry.select(_wordpress_preferences__WEBPACK_IMPORTED_MODULE_1__.store).get(scope, "activePanels") ?? [];
      if (!Array.isArray(activePanels) || !activePanels.includes(panelId)) {
        return;
      }
      registry.dispatch(_wordpress_preferences__WEBPACK_IMPORTED_MODULE_1__.store).set(
        scope,
        "activePanels",
        activePanels.filter(
          (activePanelId) => activePanelId !== panelId
        )
      );
    };
  },
  /**
   * Toggles a panel.
   *
   * If the panel is active, it will be closed.
   * If the panel is closed, it will be opened.
   *
   * @param scope - Scope identifier.
   * @param panelId - Panel identifier.
   * @returns Action creator.
   */
  togglePanel(scope, panelId) {
    return ({ dispatch, select }) => {
      if (select.isPanelActive(scope, panelId)) {
        dispatch.closePanel(scope, panelId);
      } else {
        dispatch.openPanel(scope, panelId);
      }
    };
  }
};
var selectors = {
  isPanelActive: (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_0__.createRegistrySelector)(
    (select) => (_state, scope, panelId, initialOpen = false) => {
      const activePanels = select(_wordpress_preferences__WEBPACK_IMPORTED_MODULE_1__.store).get(
        scope,
        "activePanels"
      );
      if (!activePanels || !Array.isArray(activePanels)) {
        return !!initialOpen;
      }
      return !!activePanels.includes(panelId);
    }
  )
};
var storeConfig = {
  actions,
  reducer: (state) => state,
  // Empty reducer.
  selectors
};

//# sourceMappingURL=panel.js.map


/***/ },

/***/ "./node_modules/wp-interface/build-module/store/preferences.js"
/*!*********************************************************************!*\
  !*** ./node_modules/wp-interface/build-module/store/preferences.js ***!
  \*********************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ActionType: () => (/* binding */ ActionType),
/* harmony export */   storeConfig: () => (/* binding */ storeConfig)
/* harmony export */ });
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_preferences__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/preferences */ "@wordpress/preferences");
/* harmony import */ var _wordpress_preferences__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_preferences__WEBPACK_IMPORTED_MODULE_1__);
// packages/wp-interface/src/store/preferences.ts


var ActionType = /* @__PURE__ */ ((ActionType2) => {
  ActionType2["Unknown"] = "REDUX_UNKNOWN";
  return ActionType2;
})(ActionType || {});
var actions = {
  /**
   * Sets a preference.
   *
   * @param scope - Scope identifier.
   * @param name  - Preference name.
   * @param value - Preference value.
   * @returns Action creator.
   */
  setPreference(scope, name, value) {
    return ({ registry }) => {
      registry.dispatch(_wordpress_preferences__WEBPACK_IMPORTED_MODULE_1__.store).set(scope, name, value);
    };
  },
  /**
   * Toggles a preference.
   *
   * @param scope - Scope identifier.
   * @param name  - Preference name.
   * @returns Action creator.
   */
  togglePreference(scope, name) {
    return ({ registry, select }) => {
      const currentValue = select.getPreference(scope, name);
      registry.dispatch(_wordpress_preferences__WEBPACK_IMPORTED_MODULE_1__.store).set(scope, name, !currentValue);
    };
  }
};
var selectors = {
  getPreference: (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_0__.createRegistrySelector)(
    (select) => (_state, scope, name) => {
      return select(_wordpress_preferences__WEBPACK_IMPORTED_MODULE_1__.store).get(scope, name);
    }
  )
};
var storeConfig = {
  actions,
  reducer: (state) => state,
  // Empty reducer.
  selectors
};

//# sourceMappingURL=preferences.js.map


/***/ },

/***/ "./node_modules/wp-interface/build-module/store/sidebar.js"
/*!*****************************************************************!*\
  !*** ./node_modules/wp-interface/build-module/store/sidebar.js ***!
  \*****************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ActionType: () => (/* binding */ ActionType),
/* harmony export */   storeConfig: () => (/* binding */ storeConfig)
/* harmony export */ });
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_interface__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/interface */ "./node_modules/@wordpress/interface/build-module/index.js");
// packages/wp-interface/src/store/sidebar.ts


var ActionType = /* @__PURE__ */ ((ActionType2) => {
  ActionType2["Unknown"] = "REDUX_UNKNOWN";
  ActionType2["SetDefaultSidebar"] = "SET_DEFAULT_SIDEBAR";
  return ActionType2;
})(ActionType || {});
var initialState = {
  defaultSidebarIds: {}
};
var actions = {
  /**
   * Opens a sidebar.
   *
   * @param scope      - Scope identifier.
   * @param sidebarId - Sidebar identifier.
   * @returns Action creator.
   */
  openSidebar(scope, sidebarId) {
    return ({ registry }) => {
      registry.dispatch(_wordpress_interface__WEBPACK_IMPORTED_MODULE_1__.store).enableComplementaryArea(scope, sidebarId);
    };
  },
  /**
   * Closes the currently open sidebar (if any).
   *
   * @param scope - Scope identifier.
   * @returns Action creator.
   */
  closeSidebar(scope) {
    return ({ registry }) => {
      registry.dispatch(_wordpress_interface__WEBPACK_IMPORTED_MODULE_1__.store).disableComplementaryArea(scope);
    };
  },
  /**
   * Toggles a sidebar.
   *
   * If the sidebar is active, it will be closed.
   * If the sidebar is closed or another sidebar is active, it will be opened.
   *
   * @param scope     - Scope identifier.
   * @param sidebarId - Sidebar identifier.
   * @returns Action creator.
   */
  toggleSidebar(scope, sidebarId) {
    return ({ dispatch, select }) => {
      if (select.isSidebarActive(scope, sidebarId)) {
        dispatch.closeSidebar(scope);
      } else {
        dispatch.openSidebar(scope, sidebarId);
      }
    };
  },
  /**
   * Toggles the default sidebar.
   *
   * If a sidebar is active, it will be closed.
   * If no sidebar is active, the default sidebar will be opened.
   *
   * @param scope - Scope identifier.
   * @returns Action creator.
   */
  toggleDefaultSidebar(scope) {
    return ({ dispatch, select }) => {
      if (select.getActiveSidebar(scope)) {
        dispatch.closeSidebar(scope);
      } else {
        const defaultSidebarId = select.getDefaultSidebar(scope);
        if (!defaultSidebarId) {
          return;
        }
        dispatch.openSidebar(scope, defaultSidebarId);
      }
    };
  },
  /**
   * Sets the default sidebar.
   *
   * @param scope     - Scope identifier.
   * @param sidebarId - Sidebar identifier.
   * @returns Action creator.
   */
  setDefaultSidebar(scope, sidebarId) {
    return ({ dispatch }) => {
      dispatch({
        type: "SET_DEFAULT_SIDEBAR" /* SetDefaultSidebar */,
        payload: {
          scope,
          sidebarId
        }
      });
    };
  }
};
function reducer(state = initialState, action) {
  switch (action.type) {
    case "SET_DEFAULT_SIDEBAR" /* SetDefaultSidebar */: {
      const { scope, sidebarId } = action.payload;
      return {
        ...state,
        defaultSidebarIds: {
          ...state.defaultSidebarIds,
          [scope]: sidebarId
        }
      };
    }
  }
  return state;
}
var selectors = {
  getActiveSidebar: (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_0__.createRegistrySelector)(
    (select) => (_state, scope) => {
      return select(_wordpress_interface__WEBPACK_IMPORTED_MODULE_1__.store).getActiveComplementaryArea(scope);
    }
  ),
  isSidebarActive: (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_0__.createRegistrySelector)(
    (select) => (_state, scope, sidebarId) => {
      return select(_wordpress_interface__WEBPACK_IMPORTED_MODULE_1__.store).getActiveComplementaryArea(scope) === sidebarId;
    }
  ),
  getDefaultSidebar: (state, scope) => {
    return state.defaultSidebarIds[scope] || false;
  }
};
var storeConfig = {
  initialState,
  actions,
  reducer,
  selectors
};

//# sourceMappingURL=sidebar.js.map


/***/ },

/***/ "./node_modules/wp-store-utils/build-module/combine-store-configs.js"
/*!***************************************************************************!*\
  !*** ./node_modules/wp-store-utils/build-module/combine-store-configs.js ***!
  \***************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   combineStoreConfigs: () => (/* binding */ combineStoreConfigs)
/* harmony export */ });
// packages/wp-store-utils/src/combine-store-configs.ts
function findDuplicates(keys, keyType) {
  const duplicates = [];
  const counts = {};
  for (let i = 0; i < keys.length; i++) {
    const item = keys[i];
    counts[item] = counts[item] >= 1 ? counts[item] + 1 : 1;
    if (counts[item] > 1) {
      duplicates.push(item);
    }
  }
  if (duplicates.length) {
    throw new Error(
      `combineStoreConfigs() was called with ${keyType} with duplicate keys. The duplicate keys are: ${duplicates.join(
        ", "
      )}. Check your partial data store configs for duplicates.`
    );
  }
}
function combineStoreConfigs(storeConfig1, storeConfig2, storeConfig3, storeConfig4, storeConfig5, storeConfig6) {
  findDuplicates(
    [
      ...Object.keys(storeConfig1.initialState || {}),
      ...Object.keys(storeConfig2?.initialState || {}),
      ...Object.keys(storeConfig3?.initialState || {}),
      ...Object.keys(storeConfig4?.initialState || {}),
      ...Object.keys(storeConfig5?.initialState || {}),
      ...Object.keys(storeConfig6?.initialState || {})
    ],
    "initialState"
  );
  findDuplicates(
    [
      ...Object.keys(storeConfig1.actions || {}),
      ...Object.keys(storeConfig2?.actions || {}),
      ...Object.keys(storeConfig3?.actions || {}),
      ...Object.keys(storeConfig4?.actions || {}),
      ...Object.keys(storeConfig5?.actions || {}),
      ...Object.keys(storeConfig6?.actions || {})
    ],
    "actions"
  );
  findDuplicates(
    [
      ...Object.keys(storeConfig1.controls || {}),
      ...Object.keys(storeConfig2?.controls || {}),
      ...Object.keys(storeConfig3?.controls || {}),
      ...Object.keys(storeConfig4?.controls || {}),
      ...Object.keys(storeConfig5?.controls || {}),
      ...Object.keys(storeConfig6?.controls || {})
    ],
    "controls"
  );
  findDuplicates(
    [
      ...Object.keys(storeConfig1.resolvers || {}),
      ...Object.keys(storeConfig2?.resolvers || {}),
      ...Object.keys(storeConfig3?.resolvers || {}),
      ...Object.keys(storeConfig4?.resolvers || {}),
      ...Object.keys(storeConfig5?.resolvers || {}),
      ...Object.keys(storeConfig6?.resolvers || {})
    ],
    "resolvers"
  );
  findDuplicates(
    [
      ...Object.keys(storeConfig1.selectors || {}),
      ...Object.keys(storeConfig2?.selectors || {}),
      ...Object.keys(storeConfig3?.selectors || {}),
      ...Object.keys(storeConfig4?.selectors || {}),
      ...Object.keys(storeConfig5?.selectors || {}),
      ...Object.keys(storeConfig6?.selectors || {})
    ],
    "selectors"
  );
  const mergedInitialState = {
    ...storeConfig1.initialState || {},
    ...storeConfig2?.initialState || {},
    ...storeConfig3?.initialState || {},
    ...storeConfig4?.initialState || {},
    ...storeConfig5?.initialState || {},
    ...storeConfig6?.initialState || {}
  };
  const mergedActions = {
    ...storeConfig1.actions || {},
    ...storeConfig2?.actions || {},
    ...storeConfig3?.actions || {},
    ...storeConfig4?.actions || {},
    ...storeConfig5?.actions || {},
    ...storeConfig6?.actions || {}
  };
  const mergedControls = {
    ...storeConfig1.controls || {},
    ...storeConfig2?.controls || {},
    ...storeConfig3?.controls || {},
    ...storeConfig4?.controls || {},
    ...storeConfig5?.controls || {},
    ...storeConfig6?.controls || {}
  };
  const mergedResolvers = {
    ...storeConfig1.resolvers || {},
    ...storeConfig2?.resolvers || {},
    ...storeConfig3?.resolvers || {},
    ...storeConfig4?.resolvers || {},
    ...storeConfig5?.resolvers || {},
    ...storeConfig6?.resolvers || {}
  };
  const mergedSelectors = {
    ...storeConfig1.selectors || {},
    ...storeConfig2?.selectors || {},
    ...storeConfig3?.selectors || {},
    ...storeConfig4?.selectors || {},
    ...storeConfig5?.selectors || {},
    ...storeConfig6?.selectors || {}
  };
  const mergedReducer = (state, action) => {
    let sliceOfState = state;
    const nextSlice1 = storeConfig1.reducer(sliceOfState, action);
    if (nextSlice1 !== sliceOfState) {
      sliceOfState = { ...sliceOfState, ...nextSlice1 };
    }
    if (storeConfig2 !== void 0) {
      const nextSlice2 = storeConfig2.reducer(
        sliceOfState,
        action
      );
      if (nextSlice2 !== sliceOfState) {
        sliceOfState = { ...sliceOfState, ...nextSlice2 };
      }
    }
    if (storeConfig3 !== void 0) {
      const nextSlice3 = storeConfig3.reducer(
        sliceOfState,
        action
      );
      if (nextSlice3 !== sliceOfState) {
        sliceOfState = { ...sliceOfState, ...nextSlice3 };
      }
    }
    if (storeConfig4 !== void 0) {
      const nextSlice4 = storeConfig4.reducer(
        sliceOfState,
        action
      );
      if (nextSlice4 !== sliceOfState) {
        sliceOfState = { ...sliceOfState, ...nextSlice4 };
      }
    }
    if (storeConfig5 !== void 0) {
      const nextSlice5 = storeConfig5.reducer(
        sliceOfState,
        action
      );
      if (nextSlice5 !== sliceOfState) {
        sliceOfState = { ...sliceOfState, ...nextSlice5 };
      }
    }
    if (storeConfig6 !== void 0) {
      const nextSlice6 = storeConfig6.reducer(
        sliceOfState,
        action
      );
      if (nextSlice6 !== sliceOfState) {
        sliceOfState = { ...sliceOfState, ...nextSlice6 };
      }
    }
    return sliceOfState;
  };
  return {
    initialState: Object.keys(mergedInitialState).length > 0 ? mergedInitialState : void 0,
    actions: Object.keys(mergedActions).length > 0 ? mergedActions : void 0,
    controls: Object.keys(mergedControls).length > 0 ? mergedControls : void 0,
    reducer: mergedReducer,
    resolvers: Object.keys(mergedResolvers).length > 0 ? mergedResolvers : void 0,
    selectors: Object.keys(mergedSelectors).length > 0 ? mergedSelectors : void 0
  };
}

//# sourceMappingURL=combine-store-configs.js.map


/***/ },

/***/ "./node_modules/wp-store-utils/build-module/index.js"
/*!***********************************************************!*\
  !*** ./node_modules/wp-store-utils/build-module/index.js ***!
  \***********************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   combineStoreConfigs: () => (/* reexport safe */ _combine_store_configs__WEBPACK_IMPORTED_MODULE_1__.combineStoreConfigs)
/* harmony export */ });
/* harmony import */ var _store_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./store-types */ "./node_modules/wp-store-utils/build-module/store-types.js");
/* harmony import */ var _store_types__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_store_types__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ var __WEBPACK_REEXPORT_OBJECT__ = {};
/* harmony reexport (unknown) */ for(const __WEBPACK_IMPORT_KEY__ in _store_types__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== "default") __WEBPACK_REEXPORT_OBJECT__[__WEBPACK_IMPORT_KEY__] = () => _store_types__WEBPACK_IMPORTED_MODULE_0__[__WEBPACK_IMPORT_KEY__]
/* harmony reexport (unknown) */ __webpack_require__.d(__webpack_exports__, __WEBPACK_REEXPORT_OBJECT__);
/* harmony import */ var _combine_store_configs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./combine-store-configs */ "./node_modules/wp-store-utils/build-module/combine-store-configs.js");
// packages/wp-store-utils/src/index.ts


//# sourceMappingURL=index.js.map


/***/ },

/***/ "./node_modules/wp-store-utils/build-module/store-types.js"
/*!*****************************************************************!*\
  !*** ./node_modules/wp-store-utils/build-module/store-types.js ***!
  \*****************************************************************/
() {

//# sourceMappingURL=store-types.js.map


/***/ },

/***/ "react/jsx-runtime"
/*!**********************************!*\
  !*** external "ReactJSXRuntime" ***!
  \**********************************/
(module) {

"use strict";
module.exports = window["ReactJSXRuntime"];

/***/ },

/***/ "@wordpress/abilities"
/*!***********************************!*\
  !*** external ["wp","abilities"] ***!
  \***********************************/
(module) {

"use strict";
module.exports = window["wp"]["abilities"];

/***/ },

/***/ "@wordpress/components"
/*!************************************!*\
  !*** external ["wp","components"] ***!
  \************************************/
(module) {

"use strict";
module.exports = window["wp"]["components"];

/***/ },

/***/ "@wordpress/compose"
/*!*********************************!*\
  !*** external ["wp","compose"] ***!
  \*********************************/
(module) {

"use strict";
module.exports = window["wp"]["compose"];

/***/ },

/***/ "@wordpress/data"
/*!******************************!*\
  !*** external ["wp","data"] ***!
  \******************************/
(module) {

"use strict";
module.exports = window["wp"]["data"];

/***/ },

/***/ "@wordpress/deprecated"
/*!************************************!*\
  !*** external ["wp","deprecated"] ***!
  \************************************/
(module) {

"use strict";
module.exports = window["wp"]["deprecated"];

/***/ },

/***/ "@wordpress/dom-ready"
/*!**********************************!*\
  !*** external ["wp","domReady"] ***!
  \**********************************/
(module) {

"use strict";
module.exports = window["wp"]["domReady"];

/***/ },

/***/ "@wordpress/element"
/*!*********************************!*\
  !*** external ["wp","element"] ***!
  \*********************************/
(module) {

"use strict";
module.exports = window["wp"]["element"];

/***/ },

/***/ "@wordpress/hooks"
/*!*******************************!*\
  !*** external ["wp","hooks"] ***!
  \*******************************/
(module) {

"use strict";
module.exports = window["wp"]["hooks"];

/***/ },

/***/ "@wordpress/i18n"
/*!******************************!*\
  !*** external ["wp","i18n"] ***!
  \******************************/
(module) {

"use strict";
module.exports = window["wp"]["i18n"];

/***/ },

/***/ "@wordpress/keyboard-shortcuts"
/*!*******************************************!*\
  !*** external ["wp","keyboardShortcuts"] ***!
  \*******************************************/
(module) {

"use strict";
module.exports = window["wp"]["keyboardShortcuts"];

/***/ },

/***/ "@wordpress/keycodes"
/*!**********************************!*\
  !*** external ["wp","keycodes"] ***!
  \**********************************/
(module) {

"use strict";
module.exports = window["wp"]["keycodes"];

/***/ },

/***/ "@wordpress/notices"
/*!*********************************!*\
  !*** external ["wp","notices"] ***!
  \*********************************/
(module) {

"use strict";
module.exports = window["wp"]["notices"];

/***/ },

/***/ "@wordpress/plugins"
/*!*********************************!*\
  !*** external ["wp","plugins"] ***!
  \*********************************/
(module) {

"use strict";
module.exports = window["wp"]["plugins"];

/***/ },

/***/ "@wordpress/preferences"
/*!*************************************!*\
  !*** external ["wp","preferences"] ***!
  \*************************************/
(module) {

"use strict";
module.exports = window["wp"]["preferences"];

/***/ },

/***/ "@wordpress/primitives"
/*!************************************!*\
  !*** external ["wp","primitives"] ***!
  \************************************/
(module) {

"use strict";
module.exports = window["wp"]["primitives"];

/***/ },

/***/ "@wordpress/viewport"
/*!**********************************!*\
  !*** external ["wp","viewport"] ***!
  \**********************************/
(module) {

"use strict";
module.exports = window["wp"]["viewport"];

/***/ },

/***/ "./node_modules/@wordpress/icons/build-module/library/external.mjs"
/*!*************************************************************************!*\
  !*** ./node_modules/@wordpress/icons/build-module/library/external.mjs ***!
  \*************************************************************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ external_default)
/* harmony export */ });
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/primitives */ "@wordpress/primitives");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
// packages/icons/src/library/external.tsx


var external_default = /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_0__.SVG, { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_0__.Path, { d: "M19.5 4.5h-7V6h4.44l-5.97 5.97 1.06 1.06L18 7.06v4.44h1.5v-7Zm-13 1a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-3H17v3a.5.5 0 0 1-.5.5h-10a.5.5 0 0 1-.5-.5v-10a.5.5 0 0 1 .5-.5h3V5.5h-3Z" }) });

//# sourceMappingURL=external.mjs.map


/***/ },

/***/ "./node_modules/@wordpress/icons/build-module/library/more-vertical.mjs"
/*!******************************************************************************!*\
  !*** ./node_modules/@wordpress/icons/build-module/library/more-vertical.mjs ***!
  \******************************************************************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ more_vertical_default)
/* harmony export */ });
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/primitives */ "@wordpress/primitives");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
// packages/icons/src/library/more-vertical.tsx


var more_vertical_default = /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_0__.SVG, { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_0__.Path, { d: "M13 19h-2v-2h2v2zm0-6h-2v-2h2v2zm0-6h-2V5h2v2z" }) });

//# sourceMappingURL=more-vertical.mjs.map


/***/ },

/***/ "./node_modules/clsx/dist/clsx.mjs"
/*!*****************************************!*\
  !*** ./node_modules/clsx/dist/clsx.mjs ***!
  \*****************************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   clsx: () => (/* binding */ clsx),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function r(e){var t,f,n="";if("string"==typeof e||"number"==typeof e)n+=e;else if("object"==typeof e)if(Array.isArray(e)){var o=e.length;for(t=0;t<o;t++)e[t]&&(f=r(e[t]))&&(n&&(n+=" "),n+=f)}else for(f in e)e[f]&&(n&&(n+=" "),n+=f);return n}function clsx(){for(var e,t,f=0,n="",o=arguments.length;f<o;f++)(e=arguments[f])&&(t=r(e))&&(n&&(n+=" "),n+=t);return n}/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (clsx);

/***/ }

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Check if module exists (development only)
/******/ 		if (__webpack_modules__[moduleId] === undefined) {
/******/ 			var e = new Error("Cannot find module '" + moduleId + "'");
/******/ 			e.code = 'MODULE_NOT_FOUND';
/******/ 			throw e;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry needs to be wrapped in an IIFE because it needs to be in strict mode.
(() => {
"use strict";
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_dom_ready__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/dom-ready */ "@wordpress/dom-ready");
/* harmony import */ var _wordpress_dom_ready__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_dom_ready__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index.scss */ "./src/index.scss");
/* harmony import */ var _WpAi__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./WpAi */ "./src/WpAi.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__);





_wordpress_dom_ready__WEBPACK_IMPORTED_MODULE_0___default()(() => {
  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createRoot)(document.getElementById('wp-ai')).render(/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_WpAi__WEBPACK_IMPORTED_MODULE_3__["default"], {}));
});
})();

/******/ })()
;
//# sourceMappingURL=index.js.map