#!/usr/bin/python3
def find_peak(list_of_integers):
    """Finds a peak in list_of_integers"""

    if not list_of_integers:
        return None

    def binary_search_peak(lo, hi):
        if lo == hi:
            return list_of_integers[lo]
        mid = (lo + hi) // 2
        if list_of_integers[mid] < list_of_integers[mid + 1]:
            return binary_search_peak(mid + 1, hi)
        else:
            return binary_search_peak(lo, mid)

    return binary_search_peak(0, len(list_of_integers) - 1)
