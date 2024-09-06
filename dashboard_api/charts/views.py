from django.shortcuts import render

from rest_framework.response import Response
from rest_framework.decorators import api_view

import datetime
# Create your views here.

'''
    Django view function that handles HTTP GET requests and returns a JSON response containing temporary data for a line chart.

    Returns:
        A JSON response containing temporary data for a line chart.
        The data includes labels for the x-axis and a single dataset with corresponding values.
'''

@api_view(['GET'])
def line_chart_data(request):

    # Temporary data: In future this should be replaced by actual data fetch from database
    data = {
        "labels": ["Jan", "Feb", "Mar", "Apr"],
        "datasets": [
            {
                "label": "Dataset 1",
                "data": [10, 20, 30, 40],
            },
        ],
    }

    return Response(data)

@api_view(['GET'])
def bar_chart_data(request):

    # Temporary data: In future this should be replaced by actual data fetch from database
    data = {
        "labels": ["Product A", "Product B", "Product C"],
        "datasets": [
            {
                "label": "Dataset 1",
                "data": [100, 200, 300],
            },
        ],
    }

    return Response(data)

@api_view(['GET'])
def pie_chart_data(request):

    # Temporary data: In future this should be replaced by actual data fetch from database
    data = {
        "labels": ["Red", "Blue", "Yellow"],
        "datasets": [
            {
                "label": "Dataset 1",
                "data": [300, 50, 100],
            },
        ],
    }

    return Response(data)

@api_view(['GET'])
def candlestick_data(request):

    # Temporary data: In future this should be replaced by actual data fetch from database
    data = {
        "data": [
            {"x": "2023-01-01", "open": 30, "high": 40, "low": 25, "close": 35},
            {"x": "2023-01-02", "open": 35, "high": 45, "low": 30, "close": 40},  
        ],
    }

    return Response(data)
