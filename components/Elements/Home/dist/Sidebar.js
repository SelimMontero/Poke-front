"use strict";
exports.__esModule = true;
var logo_png_1 = require("../../../public/assets/logo.png");
var avatar_png_1 = require("../../../public/assets/avatar.png");
var sidebar_module_scss_1 = require("./sidebar.module.scss");
var router_1 = require("next/router");
var js_cookie_1 = require("js-cookie");
var Sidebar = function (_a) {
    var username = _a.username;
    var isMenu = false;
    var openSidebar = function () {
        var sidebar = document.getElementById("sidebar_menu");
        sidebar.classList.add("" + sidebar_module_scss_1["default"].open);
        if (isMenu) {
            isMenu = false;
            if (sidebar.classList.contains("" + sidebar_module_scss_1["default"].close)) {
                sidebar.classList.remove("" + sidebar_module_scss_1["default"].close);
            }
            sidebar.classList.add("" + sidebar_module_scss_1["default"].open);
        }
        else {
            isMenu = true;
            if (sidebar.classList.contains("" + sidebar_module_scss_1["default"].open)) {
                sidebar.classList.remove("" + sidebar_module_scss_1["default"].open);
            }
            sidebar.classList.add("" + sidebar_module_scss_1["default"].close);
        }
    };
    var handleLogOut = function () {
        js_cookie_1["default"].remove("token");
        js_cookie_1["default"].remove("userId");
        router_1["default"].push("/");
    };
    return (React.createElement("div", { className: sidebar_module_scss_1["default"].sidebar },
        React.createElement("div", { className: sidebar_module_scss_1["default"].principal_bar, id: "sidebar_menu" },
            React.createElement("div", { className: sidebar_module_scss_1["default"].sidebar_image },
                React.createElement("img", { src: logo_png_1["default"], alt: "Logo image", width: 150, height: 60 })),
            React.createElement("div", { className: sidebar_module_scss_1["default"].sidebar_profile },
                React.createElement("div", null,
                    React.createElement("img", { src: avatar_png_1["default"], alt: "Avatar image", width: 200, height: 200 })),
                React.createElement("div", null,
                    React.createElement("div", null,
                        React.createElement("h2", null, username),
                        React.createElement("h3", null, "Level 1")),
                    React.createElement("div", null,
                        React.createElement("p", null, "\"Work hard on your test\"")))),
            React.createElement("div", null,
                React.createElement("div", { className: sidebar_module_scss_1["default"].sidebar_favorite_pokemons },
                    React.createElement("p", null,
                        React.createElement("span", null, "FAVORITES"))),
                React.createElement("div", { className: sidebar_module_scss_1["default"].sidebar_footer, onClick: handleLogOut },
                    React.createElement("p", null,
                        React.createElement("span", null, "LOG OUT"))))),
        React.createElement("div", { className: sidebar_module_scss_1["default"].responsive_view_navbar },
            React.createElement("header", null,
                React.createElement("div", { className: sidebar_module_scss_1["default"].menu },
                    React.createElement("div", { className: sidebar_module_scss_1["default"].sidebar_show, onClick: function () { return openSidebar(); } },
                        React.createElement("p", null,
                            React.createElement("span", null))),
                    React.createElement("div", { className: sidebar_module_scss_1["default"].logo },
                        React.createElement("img", { src: logo_png_1["default"], alt: "Logo image", width: 200, height: 60 })))))));
};
exports["default"] = Sidebar;
