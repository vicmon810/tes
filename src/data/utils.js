"use strict";

const fs = require( "fs-extra" );
const { join } = require( "path" );

const loadSqlQuery = async ( folderName ) => {
  const filePath = join(process.cwd(), "src", "data", folderName);
  const file = await fs.readdir( filePath );
  const sqlFIles = file.filter(( f ) => f.endsWith( ".sql" ));
  const querise = {};
  
    for ( const sqlFIle of sqlFIles ) {
      const query = fs.readFile( join( filePath, sqlFIle ), { encoding: "UTF-8" });
      querise[sqlFIle.replace( ".sql", "" ) ] = query;
    }
    return querise;
};

module.exports = {
    loadSqlQuery
};