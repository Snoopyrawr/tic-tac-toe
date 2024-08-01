const Footer = () => {
    return (
        <div className="min-h-40 flex flex-col justify-center items-center">
            <div className="flex justify-center gap-5 items-center mb-4">
                <a
                    href="https://react.dev/learn/tutorial-tic-tac-toe"
                    className="font-bold text-yellow-500"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Reference
                </a>
                <a
                    href="https://github.com/Snoopyrawr/Types-of-Stars"
                    className="font-bold text-neutral-400"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Source Code
                </a>
            </div>
            <p className="flex justify-center items-center text-white/50"> &copy; 2024 Snoopyrawr</p>
        </div>
    )
}

export default Footer