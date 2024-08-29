import java.util.LinkedList;
import java.util.ListIterator;

public class Business{
    public static void main(String[] args)
    {
        LinkedList<String> employeeNames = new LinkedList<>();
        employeeNames.addLast("Dick");
        employeeNames.addLast("Harry");
        employeeNames.addLast("Romeo");
        employeeNames.addLast("Juliet");

        Business.downsize(employeeNames, 2);

        System.out.println(employeeNames);
        System.out.println("Expected: [Dick, Romeo]");
    }

    public static void downsize(LinkedList<String> employeeNames, int n)
    {
        int counter = 0;
        ListIterator<String> iterator = employeeNames.listIterator();
        while (iterator.hasNext())
        {
            iterator.next();
            counter++;
            if (counter % n == 0)
                iterator.remove();
        }
    }
}
