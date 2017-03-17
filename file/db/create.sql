CREATE TABLE s_code_info
(
    symbol CHAR(10) PRIMARY KEY NOT NULL,
    name CHAR(10) NOT NULL,
    trade FLOAT,
    pricechange FLOAT,
    changepercent FLOAT,
    buy FLOAT,
    sell FLOAT,
    settlement FLOAT,
    open FLOAT,
    high FLOAT,
    low FLOAT,
    volume INT(32),
    amount BIGINT(64),
    code CHAR(8),
    ticktime TIME
);

CREATE TABLE s_meta
(
    `option` VARCHAR(16) PRIMARY KEY NOT NULL,
    value VARCHAR(256)
);