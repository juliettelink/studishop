
// permet dene pas a specifier le type
class StateTypes{
    static string(value){
        return typeof value === 'string'
    }
    static number(value){
        return typeof value ==='number'
    }
    static bool(value){
        return typeof value ==='boolean'
    }
}

export default StateTypes