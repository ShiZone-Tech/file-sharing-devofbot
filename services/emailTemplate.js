module.exports = ({emailFrom, downloadLink, size, expires}) => {
	return `<!DOCTYPE html>
			<html>
			<head>
				<meta charset="utf-8">
				<title></title>
			</head>
			<body>
				<p style="font-family: sans-serif; font-size: 14px; font-weight: normal; margin: 0; margin-bottom: 15px;"><b>${emailFrom}</b> has shared a file with you.</p>
				<p style="font-family: sans-serif; font-size: 14px; font-weight: normal; margin: 0; margin-bottom: 15px;">${size} in total . Expires in ${expires}</p>
				<a href="${downloadLink}" target="_blank" style="display: inline-block; color: #ffffff; background-color: #3498db; border: solid 1px #3498db; border-radius: 5px; cursor: pointer; text-decoration: none; font-size: 14px; font-weight: bold; margin: 0; padding: 12px 25px;">Download file</a>
				<p style="font-family: sans-serif; font-size: 14px; font-weight: normal; margin: 0; margin-top: 15px;">Thank you for using inShare service.</p>
				<p style="font-family: sans-serif; font-size: 14px; font-weight: normal; margin: 0; margin-top: 15px;">Good luck! Hope it works.</p>
			</body>
			</html>`
}