import { Injectable } from '@angular/core';
import { Sql } from './sql';
import { Forecast, Location } from './model';

@Injectable()
export class DatabaseService {

    private tableForecast = 'forecast';
    private tableWorldLocation = 'world_location';

    constructor(public _db: Sql) {
    }

    //
    // tableForecast queries
    //
    addForecast(name: string, forecast: Forecast): Promise<boolean> {
        const lastUpdated: number = Date.now();
        let insertQuery: string = `INSERT OR REPLACE INTO ${this.tableForecast} (name, forecast, lastUpdated) VALUES (?, ?, ?)`;
        let createTableQuery: string = `CREATE TABLE IF NOT EXISTS ${this.tableForecast} (name TEXT PRIMARY KEY, forecast TEXT, lastUpdated TEXT)`;
        let self = this;
        return self._db.query(createTableQuery)
            .then(() => self._db.query(insertQuery, [name, JSON.stringify(forecast), '' + lastUpdated]))
            .then(data => {
                console.debug(name + ' > Inserted with id -> ' + data.res.insertId);
                return true;
            })
            .catch(error => {
                console.error('Saving forecast error -> ' + error.err.message);
                return false;
            });
    }

    getForecast(name: string): Promise<{ forecast: Forecast, lastUpdated: number }> {
        let getQuery: string = `SELECT forecast, lastUpdated FROM ${this.tableForecast} WHERE name = ?`;
        return this._db.query(getQuery, [name])
            .then(data => {
                if (data.res.rows.length > 0) {
                    let obj: any = data.res.rows.item(0);
                    return {
                        forecast: JSON.parse(obj.forecast),
                        lastUpdated: +obj.lastUpdated
                    };
                }
                return null;
            })
            .catch(error => {
                console.error('Getting forecast error -> ' + error.err.message);
                return null;
            });
    }

    //
    // tableWorldLocation queries
    //
    addWorldLocation(location: Location): Promise<boolean> {
        let insertQuery: string = `INSERT OR REPLACE INTO ${this.tableWorldLocation} (name, lat, lng) VALUES (?, ?, ?)`;
        let createTableQuery: string = `CREATE TABLE IF NOT EXISTS ${this.tableWorldLocation} (name TEXT PRIMARY KEY, lat TEXT, lng TEXT)`;
        let self = this;
        return self._db.query(createTableQuery)
            .then(() => self._db.query(insertQuery, [location.name, location.lat, location.lng]))
            .then(data => {
                console.debug(location.name + ' > Inserted with id -> ' + data.res.insertId);
                return true;
            })
            .catch(error => {
                console.error('Saving world location error -> ' + error.err.message);
                return false;
            });
    }

    getWorldLocation(name: string): Promise<Location> {
        let getQuery: string = `SELECT name, lat, lng FROM ${this.tableWorldLocation} WHERE name = ?`;
        return this._db.query(getQuery, [name])
            .then(data => {
                if (data.res.rows.length > 0) {
                    let obj: any = data.res.rows.item(0);
                    return {
                        name: obj.name,
                        lat: +obj.lat,
                        lng: +obj.lng
                    };
                }
                return null;
            })
            .catch(error => {
                console.error('Getting world location error -> ' + error.err.message);
                return null;
            });
    }

    removeWorldLocation(name: string): Promise<boolean> {
        let query: string = `DELETE FROM ${this.tableWorldLocation} WHERE name = ?`;
        let self = this;
        return self._db.query(query, [name])
            .then(() => true)
            .catch(error => {
                console.error('Removing world location error -> ' + error.err.message);
                return false;
            });
    }

    getAllWorldLocations(): Promise<Array<Location>> {
        let getQuery: string = `SELECT name, lat, lng FROM ${this.tableWorldLocation}`;
        let resultArray: Array<Location> = [];
        return this._db.query(getQuery)
            .then(data => {
                for (let i = 0; i < data.res.rows.length; i++) {
                    let obj: any = data.res.rows.item(i);
                    resultArray.push({
                        name: obj.name,
                        lat: +obj.lat,
                        lng: +obj.lng
                    });
                }
                return resultArray;
            })
            .catch(error => {
                console.error('Getting all world locations error -> ' + error.err.message);
                return resultArray;
            });
    }

    //
    // Shared getter setter
    //
    set(key: string, value: string): Promise<boolean> {
        return this._db.set(key, value)
            .then(() => true)
            .catch(err => {
                console.error('[Error] Saving ' + key + ' - ' + err);
                return false;
            });
    }

    get(key: string): Promise<string> {
        return this._db.get(key)
            .then(value => {
                if (value) {
                    return value;
                } else {
                    throw new Error('Undefined value');
                }
            })
            .catch(err => {
                console.error('[Error] Getting ' + key + ' - ' + err);
                return null;
            });
    }

    remove(key: string): Promise<boolean> {
        return this._db.remove(key)
            .then(() => true)
            .catch(err => {
                console.error('[Error] Removing ' + key + ' - ' + err);
                return false;
            });
    }

    getJson(key: string): Promise<any> {
        return this.get(key).then(value => {
            try {
                return JSON.parse(value);
            } catch (err) {
                console.error('[Error] getJson(): unable to parse value for key', key, ' as JSON');
                return null;
            }
        });
    }

    setJson(key: string, value: any): Promise<boolean> {
        try {
            return this.set(key, JSON.stringify(value));
        } catch (err) {
            return Promise.resolve(false);
        }
    }
}
