const extract = x => {
	for (let i in x) global[i] = x[i];
};

export { extract };
