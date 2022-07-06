public class helloWorld {
	public static void main(String args[]) {
		if (0 < args.length) {
			System.out.println(args[0]);
			System.out.println(args[1]);
		}	
		System.out.println("Hello World!");
		printHello();
	}

	public static void printHello() {
		System.out.println("Hello World!");
	}
}

