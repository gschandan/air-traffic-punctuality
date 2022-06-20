import sqlalchemy as _sa
import sqlalchemy.ext.declarative as _declarative
import sqlalchemy.orm as _orm

AIR_TRAFFIC_DB = "sqlite:///./air-traffic.db"
engine = _sa.create_engine(AIR_TRAFFIC_DB, connect_args={"check_same_thread": False})
local_session = _orm.sessionmaker(bind=engine, autocommit=False, autoflush=True)
base = _declarative.declarative_base()