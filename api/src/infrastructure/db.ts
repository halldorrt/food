import pgPromise, { IBaseProtocol, IInitOptions, IMain } from 'pg-promise';

let foodDB: IBaseProtocol<any>;
let pgp: IMain;

export function getDataBase() {
  if (!foodDB) {
    const pgBaseConfig: IInitOptions = {};
    if (process.env.PG_TEST_PROFILE === 'verbose') {
      pgBaseConfig.query = e => {
        console.log(e.query);
      };
    }

    pgp = pgPromise(pgBaseConfig);

    const {
      PGHOST,
      PGPORT,
      PGDATABASE,
      PGUSER,
      PGPASSWORD
    } = JSON.parse(process.env.FOODDB_CONFIG || '');

    const servicePgConfig = {
      host: PGHOST,
      port: parseInt(PGPORT) || -1,
      database: PGDATABASE,
      user: PGUSER,
      password:  PGPASSWORD,
      application_name: 'recipe-vault-api',
    };

    const config = servicePgConfig;
    foodDB = pgp(config); 
  }

  return {
    foodDB,
    pgp
  }
}