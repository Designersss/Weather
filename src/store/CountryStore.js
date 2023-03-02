import {makeAutoObservable} from "mobx";

export default class CountryStore {
    constructor() {
        this._country = []
        makeAutoObservable(this)
    }

    setCountry(country) {
        this._country = country
    }
}