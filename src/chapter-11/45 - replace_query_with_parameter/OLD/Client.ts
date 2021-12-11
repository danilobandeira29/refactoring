import HeatingPlan from "./HeatingPlan";
const GLOBAL_THERMOSTAT_CURRENT_TEMP = 40;

function Client(heatingPlan: HeatingPlan) {
    return heatingPlan.targetTemperature() < GLOBAL_THERMOSTAT_CURRENT_TEMP;
}

Client(new HeatingPlan());