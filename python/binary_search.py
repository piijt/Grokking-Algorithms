def binary_search(list, item):
    low = 0
    high = len(list)-1
    while low <= high:
        mid = (low + high)
        guess = list[mid]
        if guess == item:
            return print(mid)
        if guess > item:
            high = mid - 1
        else:
            low = mid + 1
    return print(None)

# my_list = [1, 3, 5, 7, 9, 11]
my_list = [
    "Liam",
    "Noah",
    "Oliver",
    "Elijah",
    "William",
    "James",
    "Benjamin",
    "Lucas",
    "Henry",
]

binary_search(my_list, 'Henry')
