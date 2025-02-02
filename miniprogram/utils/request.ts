interface RequestOptions {
	url: string;
	method: 'GET' | 'POST' | 'PUT' | 'DELETE';
	data?: any;
	header?: object;
}

export function requestFunction<T>(options: RequestOptions): Promise<T> {
	return new Promise((resolve, reject) => {
		wx.request({
			url: options.url,
			method: options.method,
			data: options.data,
			header: {
				'content-type': 'application/json',
				...options.header
			},
			success: (res: any) => {
				if (res.statusCode === 200) {
					resolve(res.data);
				} else {
					reject(new Error(res.data.message || '请求失败'));
				}
			},
			fail: (err) => {
				reject(new Error(err.errMsg || '网络错误'));
			}
		});
	});
}