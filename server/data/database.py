import csv, sqlite3

_connection = None
_cursor = None

def get_connection():
    if not _connection:
        _connection = sqlite3.connect("air-traffic.db")
    return _connection

def get_cursor(connection :sqlite3.Connection):
    if not connection:
        connection = get_connection()
    return connection.cursor()

def create_tables(table_names):
    connection = get_connection()
    cursor = get_cursor()

    for i, table_name in enumerate(table_names):
        prepared_create = f'''CREATE TABLE IF NOT EXISTS {table_name}(
            id INTEGER PRIMARY KEY,
            month TEXT NOT NULL,
            airport TEXT NOT NULL,
            total_flights INTEGER NOT NULL,
            cancelled_flights INTEGER NOT NULL,
            more_than_15_minutes_early NUMERIC NOT NULL,
            "15_to_1_minute_early" NUMERIC NOT NULL,
            "0_to_15_minutes_late" NUMERIC NOT NULL,
            "16_to_30_minutes_late" NUMERIC NOT NULL,
            "31_to_60_minutes_late" NUMERIC NOT NULL,
            "61_to_120_minutes_late" NUMERIC NOT NULL,
            "121_to_180_minutes_late" NUMERIC NOT NULL,
            "181_to_360_minutes_late" NUMERIC NOT NULL,
            more_than_360_minutes_late NUMERIC NOT NULL,
            average_delay_minutes NUMERIC NOT NULL
            );'''
        cursor.execute(prepared_create)

        connection.commit()

    connection.close()

def populate_data(file_names):
    