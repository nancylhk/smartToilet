<style scoped>

</style>
<template>
	<div :id="_id" class="chart"></div>
</template>

<script>
	import echarts from 'echarts';
	export default {
		data() {
			return {
				chartItem: ''
			}
		},
		props: {
			_id: String,
			_chartData:Number ,
			_color: String,
		},
		mounted() {

			this.drawPie(this._chartData, this._id, this._color);

		},
		watch: {
			_chartData(val) {
				this.drawPie(val, this._id,  this._color);
			},
		},
		methods: {
			drawPie(chartData, id, color) {
				var chart = echarts.init(document.getElementById(id));
				var chartColor = color;
				chart.setOption({
					title: {
						text: '使用率\n'+chartData +'%',
						left: 'center',
						top: 'center',
						textStyle: {
							fontWeight: 'normal',
							color: '#fff',
							fontSize: 20,
							lineHeight:40
						}
					},
					series: [{
						name: 'Pie1',
						type: 'pie',
						clockWise: false,
						radius: ['65%', '75%'],
						hoverAnimation: false,
						center: ['50%', '50%'],
						itemStyle: {
							normal: {
								label: {
									show: false
								},
								labelLine: {
									show: false
								},
								shadowBlur: 0,
								shadowColor: 'rgba(40, 40, 40, 0.5)',
							}
						},
						data: [{
							value: chartData>100? 100 : chartData ,
							itemStyle: {
								normal: {
									color: new echarts.graphic.LinearGradient(0, 0, 1, 0, 
									[
										{offset:0,color:'#61b6a8'},
										{offset: 1, color: '#61b6a8'}
									],
								 false),
								}
							}
						}, {
							value:chartData > 100? 0 : 100-chartData,
							name: 'invisible',
							itemStyle: {
								normal: {
									color: '#cfd885', // 未完成的圆环的颜色
									label: {
										show: false
									},
									labelLine: {
										show: false
									}
								},
								emphasis: {
									color: '#cfd885' // 未完成的圆环的颜色
								}
							},
						}]
					}]
				})
				this.chartItem = chart;
			}
		}
	}
</script>