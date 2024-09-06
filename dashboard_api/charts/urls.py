from django.urls import path
from .views import line_chart_data, bar_chart_data, pie_chart_data, candlestick_data

urlpatterns = [
    path('api/line-chart-data/', line_chart_data),
    path('api/bar-chart-data/', bar_chart_data),
    path('api/pie-chart-data/', pie_chart_data),
    path('api/candlestick-data/', candlestick_data),
]
