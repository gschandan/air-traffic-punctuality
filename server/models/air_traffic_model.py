import sqlalchemy as sql
import data.database as db

class AirTraffic():
    index = sql.Column(sql.INTEGER, primary_key = True, index = True)
    month = sql.Column(sql.TEXT, index=True)
    airport = sql.Column(sql.TEXT, index=True)
    total_flights = sql.Column(sql.INTEGER)
    cancelled_flights = sql.Column(sql.INTEGER)
    more_than_fifteen_minutes_early = sql.Column(sql.REAL)
    fifteen_to_one_minute_early = sql.Column(sql.REAL)
    zero_to_fifteen_minutes_late = sql.Column(sql.REAL)
    sixteen_to_thirty_minutes_late = sql.Column(sql.REAL)
    thirtyone_to_sixty_minutes_late = sql.Column(sql.REAL)
    sixtyone_to_onehundred_and_twenty_minutes_late = sql.Column(sql.REAL)
    onehundred_and_twentyone_to_onehundred_and_eighty_minutes_late = sql.Column(sql.REAL)
    onehundred_and_eightyone_to_threehundred_and_sixty_minutes_late = sql.Column(sql.REAL)
    more_than_threehundred_and_sixty_minutes_late = sql.Column(sql.REAL)
    average_delay_minutes = sql.Column(sql.REAL)

class AirTrafficAll(AirTraffic, db.base):
    __tablename__ = "air_traffic_all"
    
class AirTrafficScheduled(AirTraffic, db.base):
    __tablename__ = "air_traffic_scheduled"

class AirTrafficChartered(AirTraffic, db.base):
    __tablename__ = "air_traffic_chartered"