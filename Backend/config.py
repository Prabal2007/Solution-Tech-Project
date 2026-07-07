import os
from dotenv import load_dotenv

load_dotenv()

class Config:
    SECRET_KEY = "your-secret-key"

    SQLALCHEMY_DATABASE_URI = "mysql+pymysql://root:prab_4117%40@localhost:3306/sol_tech"

    SQLALCHEMY_TRACK_MODIFICATIONS = False