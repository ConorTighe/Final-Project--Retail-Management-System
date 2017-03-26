"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var router_1 = require("@angular/router");
var home_component_1 = require("./home.component");
var employees_component_1 = require("./employees.component");
var map_component_1 = require("./map.component");
var appRoutes = [
    {
        path: '',
        component: home_component_1.HomeComponent
    },
    {
        path: 'employees',
        component: employees_component_1.EmployeesComponent
    },
    {
        path: 'maps',
        component: map_component_1.MapsComponent
    }
];
exports.routing = router_1.RouterModule.forRoot(appRoutes);
//# sourceMappingURL=app.routing.js.map