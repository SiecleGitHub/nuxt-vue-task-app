# Sqlite database commands

sqlite3 local.db < lib/db/migrations/0000_warm_big_bertha.sql

sqlite3 local.db ".tables"
sqlite3 local.db "PRAGMA table_info('tasks');"
