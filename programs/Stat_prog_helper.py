from math import sqrt
#Input array data and save in seperate txt file
def inp(data, n):
    i=0
    file=open("tony/programs/array_data.txt","a")
    for i in range(n):
        temp = int(input(f"Input for element {i}:\n"))
        data.append(temp)
        file.write(f"{temp}\n")
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

def Abs_freq_inp(ranges):
    Freq_arr = []
    n = ranges.len()
    i=0
    for i in range(n):
        temp = int(input(f"Input for element {i}:\n"))
        Freq_arr.append(temp)
    return Freq_arr
 
def Rangeavg(ranges, Freq_arr):
    RngAvg = []
    count=0
    j=0
    for i in ranges:
        if(isinstance(ranges[i], int)):
            count+=1
            if(count==2):
                count = 0
                RngAvg[j] = (ranges[i]+temp)/2
                j+=1
            temp = ranges[i]
    return RngAvg
    
def XofIntervalMultNoStudent(ranges, Freq_arr):
    rngavg=Rangeavg(ranges, Freq_arr)
    n = ranges.len()
    xmultf = []
    for i in range(n):
        xmultf[i] = ranges[i]*rngavg[i]
    return xmultf

def ArthmtcAvg(sFreq, SfrqmultNoStudent):
    return SfrqmultNoStudent/sFreq



            

        



    