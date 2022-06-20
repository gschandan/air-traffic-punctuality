import sqlalchemy
import sqlalchemy.ext.declarative as _declarative
import sqlalchemy.orm as _orm
import databases

database_url = "sqlite:///air-traffic.db"
database = databases.Database(database_url)
engine = sqlalchemy.create_engine(
    database_url, connect_args={"check_same_thread": False}
)
local_session = _orm.sessionmaker(bind=engine, autocommit=False, autoflush=True)
base = _declarative.declarative_base()