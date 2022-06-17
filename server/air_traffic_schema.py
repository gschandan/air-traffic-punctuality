from pydantic import BaseModel

class AirTrafficBase(BaseModel):
    month: str
    airport: str
    total_flights: int
    cancelled_flights: int
    more_than_fifteen_minutes_early: float
    fifteen_to_one_minute_early: float
    zero_to_fifteen_minutes_late: float
    sixteen_to_thirty_minutes_late: float
    thirtyone_to_sixty_minutes_late: float
    sixtyone_to_onehundred_and_twenty_minutes_late: float
    onehundred_and_twentyone_to_onehundred_and_eighty_minutes_late: float
    onehundred_and_eightyone_to_threehundred_and_sixty_minutes_late: float
    more_than_threehundred_and_sixty_minutes_late: float
    average_delay_minutes: float

    class Config:
        orm_mode = True

class AirTrafficCreate(AirTrafficBase):
    pass

class AirTrafficFetch(AirTrafficBase):
    id : int
    class Config:
        orm_mode = True

class AirTraffic(AirTrafficBase):
    id: int
    class Config:
        orm_mode = True