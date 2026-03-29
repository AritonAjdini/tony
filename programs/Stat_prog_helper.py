from math import sqrt
#Input array data and save in seperate txt file
def inp(data, n):
    i=1
    file=open("array_data.txt","a")
    for value in range(n):
        temp = int(input(f"Input for element {i}:\n"))
        data.append(temp)
        file.write(f"{temp}\n")
        i+=1
    file.write(f"Arr Data Line\n")
    file.close()

# def Num_class(n):
#     element = 0
#     while(2**element<n):
#         element+=1
#     return element

def Num_class(n):
    return round(sqrt(n))

def widt(min_value, max_value, num_classes):
    if num_classes == 0:
        return 0  # or raise an exception
    return (max_value - min_value) / num_classes

def class_ranges(Min, L, K):
    ranges = []
    start = Min
    for i in range(K):
        end = start + L
        ranges.append((start, end))
        start = end
    return ranges

def Abs_freq_count(ranges, ):
    ab_freq_arr