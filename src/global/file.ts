import { isNull } from '@/global/is'

export function webChooseFile(cb: (file: File) => unknown, accept?: string): void {
	const id = 'file-selector-99999999'
	let input = document.getElementById(id) as HTMLInputElement
	if (isNull(input)) {
		input = document.createElement('input')
		input.id = id
		input.type = 'file'
		input.style.position = 'fixed'
		input.style.left = '-10000px'
		document.body.appendChild(input)
	} else {
		input.value = ''
	}
	if (accept) {
		input.accept = accept
	} else {
		input.removeAttribute('accept')
	}
	input.onchange = (): void => {
		if (input.files?.length) {
			cb(input.files[0])
		}
	}
	input.classList.add('selectFile')
	const e = document.createEvent('MouseEvent') as unknown as Event
	e.initEvent('click', false, true)
	input.dispatchEvent(e)
}

export function webMulChooseFile(cb: (file: FileList) => unknown, accept?: string): void {
	const id = 'file-selector-88888'
	let input = document.getElementById(id) as HTMLInputElement
	if (isNull(input)) {
		input = document.createElement('input')
		input.id = id
		input.type = 'file'
		input.multiple = true
		input.style.position = 'fixed'
		input.style.left = '-100000px'
		document.body.appendChild(input)
	} else {
		input.value = ''
	}
	if (accept) {
		input.accept = accept
	} else {
		input.removeAttribute('accept')
	}
	input.onchange = (): void => {
		if (input.files?.length) {
			cb(input.files)
		}
	}
	input.classList.add('selectFile')
	const e = document.createEvent('MouseEvent') as unknown as Event
	e.initEvent('click', false, true)
	input.dispatchEvent(e)
}
