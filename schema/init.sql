CREATE TABLE IF NOT EXISTS article (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    -- 主键，自增
    link TEXT NOT NULL UNIQUE,
    -- 链接，非空且唯一
    content TEXT NOT NULL -- 内容，非空
);