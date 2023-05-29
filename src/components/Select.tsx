type Props = {
	options: string[];
	option: string;
	setOption: (e: any) => void;
};
const Select = ({ options, option, setOption }: Props) => {
	return (
		<select
			className="form-select w-25 mx-auto mb-3"
			value={option}
			onChange={(e) => setOption(e.target.value)}
			aria-label="Default select example"
		>
			{options.map((option, i) => (
				<option value={option} key={i}>
					{option}
				</option>
			))}
		</select>
	);
};
export default Select;
