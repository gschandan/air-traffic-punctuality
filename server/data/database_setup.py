import sqlite3
from typing import List
import pandas as pd
import os

def populate_air_traffic_data(table_names: List[str], db):

    cwd = os.getcwd() + "\\rawdata\\"
    for _, table_name in enumerate(table_names):
        df = pd.read_csv(f'{cwd}{table_name}.csv')
        df.columns = df.columns.str.strip()
        df.to_sql(table_name, db, if_exists='replace', index=True)
