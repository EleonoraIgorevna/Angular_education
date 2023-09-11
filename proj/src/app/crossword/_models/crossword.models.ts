export type TCell = string | number;
export type TCrossword = TCell[][];
export interface ISizeCrossword {
	xSize: number;
	ySize: number;
}

type ShemeAndAnswers = (number | string)[]

interface IQuestion {
	"number": number,
	"direction": string,
	"startRow": number,
	"startCol": number,
	"length": number,
	"text": string,
	"answer": string
}



export interface ICrosswordDTO {
	"day": number
	"columns": number
	"rows": number
	'answers': ShemeAndAnswers[]
	'scheme': ShemeAndAnswers[]
	'questions': IQuestion[]
}
