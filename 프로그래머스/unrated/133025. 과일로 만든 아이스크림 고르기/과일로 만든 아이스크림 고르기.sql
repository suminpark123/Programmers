-- 코드를 입력하세요
SELECT f.FLAVOR
from FIRST_HALF f,ICECREAM_INFO i
where f.flavor = i.flavor and f.TOTAL_ORDER >3000 and i.INGREDIENT_TYPE = 'fruit_based'
order by TOTAL_ORDER desc;