import sqlite3
import pandas as pd
import os

def populate_air_traffic_data(table_names):

    cwd = os.getcwd() + "\\rawdata\\"

    with sqlite3.connect("air-traffic.db") as connection:
        for _, table_name in enumerate(table_names):
            df = pd.read_csv(f'{cwd}{table_name}.csv')
            df.columns = df.columns.str.strip()
            df.to_sql(table_name, connection, if_exists='replace', index=True)
