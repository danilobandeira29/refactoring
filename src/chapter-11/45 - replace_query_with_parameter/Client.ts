import HeatingPlan from "./HeatingPlan";
const GLOBAL_THERMOSTAT_CURRENT_TEMP = 40;
const GLOBAL_THERMOSTAT_SELECTED_TEMP = 39;

function Client(heatingPlan: HeatingPlan) {
    return heatingPlan.targetTemperature(GLOBAL_THERMOSTAT_SELECTED_TEMP) < GLOBAL_THERMOSTAT_CURRENT_TEMP;
}

Client(new HeatingPlan());