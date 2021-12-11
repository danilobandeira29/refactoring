export default class HeatingPlan {
    private static readonly MAX_TEMP_CELSIUS = 42;
    private static readonly MIN_TEMP_CELSIUS = 38;

    targetTemperature(selected_temp: number) {
        if(selected_temp > HeatingPlan.MAX_TEMP_CELSIUS) return HeatingPlan.MAX_TEMP_CELSIUS;
        else if(selected_temp < HeatingPlan.MIN_TEMP_CELSIUS) return HeatingPlan.MIN_TEMP_CELSIUS;
        return selected_temp;
    }
}
