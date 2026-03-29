import sys
import os

sys.path.append(os.path.dirname(os.path.dirname(__file__)))

from Stat_prog_helper import inp, Num_class, widt, class_ranges

def main():
    n = int(input("What is the number of elements?\n"))
    data = [] 
    inp(data, n)
    Max = max(data)
    Min = min(data)
    K = Num_class(n)
    Classwidth = round(widt(Min, Max, K))
    Interval = class_ranges(Min, Classwidth, K)
    print("Klasat  Absolute_Frequency Relative_Frequency_% Cumulative_Frequency")
    print("------  ------------------ -------------------- --------------------")
    width1=2; 
    print("\n".join(str(x).center(width1) for x in Interval))
if __name__ == "__main__":
    main()
