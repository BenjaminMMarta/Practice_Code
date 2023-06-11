# chicken = {
#     'name': 'Lady Gray',
#     'breed': 'Silkie',
#     'total_egg_count': 12,
#     'egg_chart': {'M': True,
#         'T': True,
#         'W': True,
#         'Th': True,
#         'F': True,
#         'S': False,
#         'Su': True},
#     'coop_mates': ['Butters', 'Stevie', 'Henry']}


# for key in chicken.keys():
#     print(key)

# for value in chicken.values():
#     print(value)

# for pair in chicken.items():
#     print(pair)

# for (key, Value) in chicken.items():
#     print(key, '--->', Value)

# lemon = {'sour', 'yellow', 'fruit', 'bumpy'}
# banana = {'fruit', 'smooth', 'sweet', 'yellow'}
# orange = ['fruit', 'bumpy', 'orange', 'sweet']

# for adj in banana:
#     print(adj)

# nums = [1,2,3,4,5,6,7,8,9,10,11,12,13]

# evens = []

# for num in nums:
#     if num % 2 == 0:
#         evens.append(num)

# print(evens)

# evens = [num for num in nums if num % 2 == 1]

# [num * 2 for num in nums]
# ['HIIII' for num in nums]

# [n * n for n in [2,4,6,8]]

# [char.upper() + "." for char in 'lmfao']

# [num for num in range(10,20)]

# def gen_board(size, initial_val = None):
#     return [[initial_val for x in range(size)] for y in range(size)]


# chickens = [
#     {"name": 'Henry', "sex": 'Rooster'},
#     {"name": 'Lady Gray', "sex": 'Hen'},
#     {"name": 'Junior', "sex": 'Rooster'},
#     {"name": 'Stevie Chicks', "sex": 'Hen'},
#     {"name": 'Rocket', "sex": 'Hen'},
#     {"name": 'Butters', "sex": 'Rooster'}
# ]

# hens = [bird["name"] for bird in chickens if bird["sex"] == 'Hen']
# ----------------------------------------------------------------------------
# import random

# names = ['Doug', 'Hanna', 'Em', 'Garry', 'Sam', 'Sonny', 'Tim', 'Tommy', 'Kate']

# numbers = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]

# cities = ['San Diego', 'San Fransisco', 'Pheonix', 'Portland', 'San Jose', 'San Migule']

# def random_name():
#     print random.choice(names)

# def random_number():
#     return random.choice(numbers)

# def random_city():
#     return random.choice(cities)

# def random_person (person):
#     person =  {
#         'Name': random_name(),
#         'Favorite_Number': random_number(),
#         'Hometown': random_city()
#     }

#     return person
# ----------------------------------------------------------------------------------

# def greet(person):
#     return F"Hello there, {person}"

# def add(num1, num2):
#     return num1 + num2

#-------------------------------------------------------------------------------

from math import sqrt
from random import randint

class Triangle:
    def __init__(self, a, b):
        self.a = a
        self.b = b

    @classmethod
    def random(cls):
        return cls(randint(1,20), randint(1,20))

    def get_hypotenuse(self):
        return sqrt(self.a ** 2 + self.b ** 2)
    
    def get_area(self):
        return self.a * self.b / 2


class ColoredTriangle(Triangle):

    def __init__(self, a, b, color):
        super().__init__(a,b)
        self.color = color

































