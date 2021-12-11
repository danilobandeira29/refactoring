const GLOBAL_THERMOSTAT_SELECTED_TEMP = 39;

export default class HeatingPlan {
    private static readonly MAX_TEMP_CELSIUS = 42;
    private static readonly MIN_TEMP_CELSIUS = 38;

    targetTemperature() {
        if(GLOBAL_THERMOSTAT_SELECTED_TEMP > HeatingPlan.MAX_TEMP_CELSIUS) return HeatingPlan.MAX_TEMP_CELSIUS;
        else if(GLOBAL_THERMOSTAT_SELECTED_TEMP < HeatingPlan.MIN_TEMP_CELSIUS) return HeatingPlan.MIN_TEMP_CELSIUS;
        return GLOBAL_THERMOSTAT_SELECTED_TEMP;
    }
}
