select
  ((((f - l) / (30.0 / 365.0)) / 6026000.0) * 100) as apr
from (
    select
      (select result3 as profit from bonder_balances where token = 'USDC' order by timestamp desc limit 1 offset 30) as l,
      (select result3 as profit from bonder_balances where token = 'USDC' order by timestamp desc limit 1) as f
)
