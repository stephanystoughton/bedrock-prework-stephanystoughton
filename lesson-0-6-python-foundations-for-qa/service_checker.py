services = ["api", "database", "cache", "search", "auth"]

results = {}

for service in services:
    answer = input(f"Is {service} up? (yes/no): ").strip().lower()

    if answer == "yes":
        results[service] = "UP"
    else:
        results[service] = "DOWN"


def print_health_report(results):
    print("=== Service Health Report ===")

    for service, status in results.items():
        print(f"{service}: {status}")

    up_count = 0
    down_count = 0

    for status in results.values():
        if status == "UP":
            up_count += 1
        else:
            down_count += 1

    print()
    print(f"Up: {up_count}")
    print(f"Down: {down_count}")
    print("Total: 5")


print_health_report(results)