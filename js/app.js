(function (window) {
	
	const ajax = axios.create({
		baseURL: 'http://localhost:8080/todos'
	});

	getData();

	// 获取数据
	function getData() {
		ajax.get('/getDataAll').then(res => {
			const {data, meta} = res.data;
			if(meta.code === 200) {
			// console.log(res.data);
			bindList(data);
			}
		});
	};
	// 渲染页面

	function bindList(arr) {
		// console.log('渲染页面');
		const Activearr = arr.filter(item => {
			return item.isFinish === '0';
		}).length;
		const todoHtml = template('todoTpl',{list: arr, num: Activearr});
		const todoapp = document.querySelector('.todoapp');
		todoapp.innerHTML = todoHtml;
	};

	
	
})(window);
