#!/usr/bin/python3
def find_peak(list_of_integers):
    """Finds a peak in list_of_integers"""

    if not list_of_integers:
        return None

    def find_peak_util(nums, lo, hi):
        mid = (lo + hi) // 2

        # Check if mid is a peak
        if (mid == 0 or nums[mid] >= nums[mid - 1]) and (mid == len(nums) - 1 or nums[mid] >= nums[mid + 1]):
            return nums[mid]
        # If mid is less than its right neighbor, search right half
        elif mid < len(nums) - 1 and nums[mid] < nums[mid + 1]:
            return find_peak_util(nums, mid + 1, hi)
        # If mid is less than its left neighbor, search left half
        else:
            return find_peak_util(nums, lo, mid - 1)

    return find_peak_util(list_of_integers, 0, len(list_of_integers) - 1)

